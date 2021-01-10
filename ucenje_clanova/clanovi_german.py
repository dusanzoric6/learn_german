import codecs

from random import shuffle

def learn_this_list(list):
    for count, line in enumerate(list):

        length = len(target_words_list)
        percentage = round((count / length) * 100, 1)
        print("{} %".format(percentage))

        word_line_array = line.split(" – ")
        english_word = word_line_array[0]
        artikel_real = word_line_array[1].split()[0]
        try:
            german_word = word_line_array[1].split()[1]
        except:
            print("SKIPPING  : {}".format(word_line_array))
            continue

        print(german_word + " -" + english_word)
        artikel_test = input("clan: ")

        if artikel_real.lower() == artikel_test.lower():
            print("true")
            print("-------------------------------------------------")
            print("")
        else:
            print("false - " + artikel_real)
            list_of_false.append(line)
            with open('list_of_false.txt', 'w') as f:
                for line in list_of_false:
                    f.write("%s\n" % line)
            print("-------------------------------------------------")
            print("")


with codecs.open("clanovi_list.txt", 'r', 'utf-8') as f:
    target_words_list = f.readlines()
target_words_list = [x.strip() for x in target_words_list]
target_words_list = [line.split(".", 1)[1] for line in target_words_list]
shuffle(target_words_list)

list_of_false = []

learn_this_list(target_words_list)
if not list_of_false:
    print("Izuvas!")
else:
    print("--------------  AGAIN --------------------")
    learn_this_list(list_of_false)
    print(*list_of_false, sep="\n")
