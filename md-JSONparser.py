import os
import re
import json

title = os.path.basename(os.path.normpath(os.getcwd()))
description = open('overview.md', 'r').read()
difficulty = open('DIFFICULTY', 'r').read()[:-3]
worksheet = open('worksheet.md', 'r').read()

# GET HEADINGS
headings = []
worksheetInLines = open('worksheet.md', 'r').readlines()

for i in range(0, len(worksheetInLines)):
    if '##' in worksheetInLines[i]:
        headings.append(worksheetInLines[i][2:-1])

# DEFINE FUNCTIONS
def Split(text, delimiter):
    text = text.split(delimiter)
    return text

def splitSections(worksheet):
    worksheet = worksheet.split("##")
    del worksheet[0]
    for i in range(0, len(worksheet)):
        worksheet[i] = '##' + worksheet[i]
    return worksheet

def splitTags(section):
    section = section.split('<split>')
    return section

def splitCode(subsection):
    subsection = subsection.split('```')
    return subsection

def splitImages(subsection):
    subsection = re.split(r'!\[(.*?)\)', subsection)
    return subsection

def turnAsteriskToBoldTag(sectionSplitIntoWords):
    for word in range(0, len(sectionSplitIntoWords)):
            sectionSplitIntoWords[word] = re.sub(r'^\*\*', '<b>', sectionSplitIntoWords[word], 1)
            sectionSplitIntoWords[word] = re.sub(r'\*\*', '</b>', sectionSplitIntoWords[word])

            sectionSplitIntoWords[word] = re.sub(r'^\*', '<i>', sectionSplitIntoWords[word], 1)
            sectionSplitIntoWords[word] = re.sub(r'\*', '</i>', sectionSplitIntoWords[word])

    return ' '.join(sectionSplitIntoWords)

def turnTickToCodeTag(subsection):
    for word in range(0, len(subsection)):
        subsection[word] = re.sub(r'^`', '<code>', subsection[word], 1)
        subsection[word] = re.sub(r'`', '</code>', subsection[word], 1)

    return ' '.join(subsection)

# iterate through a section line by line and organise into text, images and code.
# builds a json object and appends to tasks
def goThroughSection(section, index):
    taskList = []
    instructions = []
    for part in range(0, len(section)):
        if 'images' in section[part]:
            image = {
                "option": "image",
                "content": section[part].partition('(')[2]
            }
            instructions.append(image)
        elif 'python\n' in section[part]:
            content = re.findall(r'python(.*?)$', section[part], re.DOTALL)
            code = {
                "option": "code",
                "content": content
            }
            instructions.append(code)
        else:
            text = {
                "option": "text",
                "content": section[part]
            }
            instructions.append(text)
    task = {
        "heading": headings[index],
        "instructions": instructions
    }
    taskList.append(task)
    return taskList

# REPLACE BOLD PARTS:
worksheet = worksheet.replace('\n', '\n\n')
worksheetInWords = ' '.join(worksheet.split('\n')).split(' ')
worksheetWithBolds = turnAsteriskToBoldTag(worksheetInWords)

# ITERATE THROUGH SECTIONS, SPLIT UP AND CONVERT TO JSON
sectionsSplit = splitSections(worksheetWithBolds)

# sort out newline chars and remove section headers
for i in range(0, len(sectionsSplit)):
    sectionsSplit[i] = re.sub(r'  ', '\n', sectionsSplit[i])
    sectionsSplit[i] = re.sub(r'##(.*?)\n', '', sectionsSplit[i])

# iterate through worksheet, split everything up and print JSON
index = 0

# all the tasks!
tasks = []

for i in range(0, len(sectionsSplit)):
    tagSplit = []
    tagSplit += splitTags(sectionsSplit[i])

    for j in range(0, len(tagSplit)):
        codeSplit = []
        imgSplit = []

        codeSplit += splitCode(tagSplit[j])

        for k in range(0, len(codeSplit)):
            # get inline code sections and turn ` into <code> tags
            wordSplit = codeSplit[k].split(' ')
            completeCodeSplit = turnTickToCodeTag(wordSplit)

            imgSplit += splitImages(completeCodeSplit)
            wOutNewLine = [x for x in imgSplit if x != '\n\n' and x != '']

        # tasks.append(json.dumps(goThroughSection(wOutNewLine, index)))
        tasks.append(goThroughSection(wOutNewLine, index))


    index += 1
# EXPORT TO JSON FILE
# compile title, description, difficulty and tasks into one worksheet variable
worksheet = {
    "title": title,
    "description": description,
    "difficulty": difficulty,
    "tasks": tasks
}
worksheet = json.dumps(worksheet)

with open('worksheet.js', 'wt') as outputFile:
        outputFile.write(worksheet)

print 'File written to current directory'
