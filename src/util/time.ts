const birth = Date.parse(new Date('19 May 2002').toString());

const msSinceBirth = Date.parse(Date()) - birth;

export const age = msSinceBirth / 1000 / 60 / 60 / 24 / 365;
