from bs4 import BeautifulSoup

with open("nepravilni glagoli.html", "r") as fp:
    soup = BeautifulSoup(fp, 'html.parser')

verb_list = []
line = ""

for tr in soup.find_all('tr'):
    verb = ""
    past = ""

    verbTag = tr.find_all("td", {"class": "verb"})
    if verbTag:
        verb = verbTag[0].next
        print("verb - " + verb)

    pastTag = tr.find_all("td", {"class": "past"})
    if pastTag:
        pastBList = pastTag.find_all("b")
        print("past - " + pastBList[0])
    # try:
    #     verb = tr.attrs.get("class")[0]
    # except:
    #     continue



    # if tr.attrs.get("class")[0] == "verb":
    #     verb = tr.next
    #     line = verb + " - "
    #
    # if tr.attrs.get("class")[0] == "past":
    #     past = str(tr.next.encode('utf-8'))
    #     line = line + " " + past
    #     with open('your_file.txt', 'a') as f:
    #         f.write("%s\n" % line)
