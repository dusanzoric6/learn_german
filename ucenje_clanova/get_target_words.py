import codecs

target_list = []
final_list = []
input_word = ""

with codecs.open("2000.txt", 'r', 'utf-8') as f:
    words_list_2000 = f.readlines()
words_list_2000 = [x.strip() for x in words_list_2000]

while input_word != "end":
    input_word = input("word to learn? : ").lower()
    for line in words_list_2000:
        word_line_array = line.split(" – ")
        german_word = word_line_array[1].split()[1]
        if input_word.lower() == german_word.lower():
            final_list.append(line)
            print("added => " + line)

with open("clanovi_list.txt", 'w') as f:
    for line in final_list:
        f.write(line + "\n")
