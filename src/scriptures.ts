export interface Scripture {
  reference: string;
  body: string;
  link: string;
}

export interface SaviorScriptures {
  messiah: Array<Scripture>;
  man: Array<Scripture>;
  divine: Array<Scripture>;
}

export const ScriptureList: SaviorScriptures = {
  messiah: [
    {
      reference: "Matthew 1:21",
      body: "And she shall bring forth a son, and thou shalt call his name JESUS: for he shall save his people from their sins.",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/1?lang=eng&id=p21#p21",
    },
    {
      reference: "Luke 4:18-21",
      body: `
        <p>He hath anointed me to preach the gospel to the poor...to heal the brokenhearted, to preach deliverance to the captives...to set at liberty them that are bruised</p>
        <br>
        <p>This day is this scripture fulfilled in your ears.</p>
      `,
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/luke/4?lang=eng&id=p18-p21#p18",
    },
    {
      reference: "Matthew 16:16",
      body: "And Simon Peter answered and said, Thou art the Christ",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/16?lang=eng&id=p16#p16",
    },
    {
      reference: "Matthew 27:11",
      body: "And Jesus stood before the governor: and the governor asked him, saying, Art thou the King of the Jews? And Jesus said unto him, Thou sayest.",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/27?lang=eng&id=p11#p11",
    },
    {
      reference: "1 Timothy 6:15",
      body: "Which in his times he shall shew, who is the blessed and only Potentate, the King of kings, and Lord of lords",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/1-tim/6?lang=eng&id=p15#p15",
    },
  ],
  man: [
    {
      reference: "Mark 3:5",
      body: "[He] looked round about on them with anger, being grieved for the hardness of their hearts...",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/mark/3?lang=eng&id=p5#p5",
    },
    {
      reference: "Mark 8:23-25",
      body: `
        <p>And he took the blind man by the hand...put his hands upon him...[and] asked him if he saw ought.</p>
        <br>
        <p>...</p>
        <br>
        <p>After that he put his hands again upon his eyes, and made him look up: and he was restored, and saw every man clearly.</p>
      `,
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/mark/8?lang=eng&id=p23-25#p23",
    },
    {
      reference: "Mark 15:34",
      body: "<p>And at the ninth hour Jesus cried with a loud voice, saying, Eloi, Eloi, lama sabachthani? which is, being interpreted, My God, my God, why hast thou forsaken me?</p>",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/mark/15?lang=eng&id=p34#p34",
    },
    {
      reference: "Hebrews 2:14-16",
      body: `
        <p>Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same;</p>
        <br>
        <p>...</p>
        <br>
        <p>For verily he took not on him the nature of angels; but he took on him the seed of Abraham.</p>
      `,
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/heb/2?lang=eng&id=p14-16#p14",
    },
  ],
  divine: [
    {
      reference: "John 1:1-3",
      body: `
        <p>In the beginning was the Word, and the Word was with God, and the Word was God.</p>
        <br>
        <p>The same was in the beginning with God.</p>
        <br>
        <p>All things were made by him; and without him was not any thing made that was made.</p>
      `,
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/1?lang=eng&id=p1-3#p1",
    },
    {
      reference: "John 8:58",
      body: "Jesus said unto them, Verily, verily, I say unto you, Before Abraham was, I am.",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/8?lang=eng&id=p58#p58",
    },
    {
      reference: "John 10:30",
      body: "I and my Father are one.",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/10?lang=eng&id=p30#p30",
    },
    {
      reference: "John 12:46",
      body: "I am come a light into the world, that whosoever believeth on me should not abide in darkness.",
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/12?lang=eng&id=p46#p46",
    },
    {
      reference: "John 14:6-7",
      body: `
        <p>Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.</p>
        <br>
        <p>If ye had aknown me, ye should have known my Father also: and from henceforth ye know him, and have seen him.</p>
      `,
      link: "https://www.churchofjesuschrist.org/study/scriptures/nt/john/14?lang=eng&id=p6-7#p6",
    },
  ],
};
