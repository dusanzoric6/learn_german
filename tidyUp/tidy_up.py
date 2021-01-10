import codecs

from googletrans import Translator

translator = Translator()
# word = translator.translate('das Haus', src='de')
print(translator.translate('veritas lux mea', src='la'))
print(translator.translate("das Haus", src="de", dest="en"))


with codecs.open("raw_from_the_book.txt", 'r', 'utf-8') as f:
    target_words_list = f.readlines()
target_words_list = [x.strip() for x in target_words_list]
target_words_list = filter(None, target_words_list)
tidy_list = []

for line in target_words_list:
    word_reverse = line.split(",")[0]
    article = word_reverse.split()[1]
    german_word = word_reverse.split()[0]
    word_final = article + " " + german_word
    tidy_list.append(word_final)

with open('new_words_tighty_up.txt', 'w') as f:
    for german_word in tidy_list:
        english_word = translator.translate(german_word, src='de').text
        if "the" in english_word:
            english_word = english_word.split("the ")[1]
        f.write(english_word + " - " + german_word + "\n")
