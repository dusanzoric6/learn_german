class WordComplex:
    def __init__(self, eng, art, ger):
        self.eng = eng
        if not art:
            art = ""
        self.art = art
        self.ger = ger

    def get_german(self):
        return (self.art + " " + self.ger).strip()

    def get_all_string(self):
        return self.eng + " - " + self.get_german()
