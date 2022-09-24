import generateRandomString, { timeSince } from "../../api/keygen";
//generateRandomString function
it('Test the key generation function for 5 characters', () => {
    expect(generateRandomString(5)).not.toBe(generateRandomString(5));
});

it('Test the key generation function for 10 characters', () => {
    expect(generateRandomString(10)).not.toBe(generateRandomString(10));
});


it('Test the key generation function for 15 characters', () => {
    expect(generateRandomString(15)).not.toBe(generateRandomString(15));
});


it('Test the key generation function for 20 characters', () => {
    expect(generateRandomString(20)).not.toBe(generateRandomString(20));
});


it('Test the key generation function for 25 characters', () => {
    expect(generateRandomString(25)).not.toBe(generateRandomString(25));
});


it('Test the key generation function for 30 characters', () => {
    expect(generateRandomString(30)).not.toBe(generateRandomString(30));
});


//timesince function
it('Test the timesince with Sat Sep 3 2022 08:30:29 GMT+0000 GMT+0000', () => {
    const date = timeSince("Sat Sep 3 2022 08:30:29 GMT+0000");
    expect(date).toEqual('21 day(s) ago')

});

it('Test the timesince with sun Sep 4 2022 08:30:29 GMT+0000 GMT+0000', () => {
    const date = timeSince("sun Sep 4 2022 08:30:29 GMT+0000 GMT+0000");
    expect(date).toEqual('20 day(s) ago')

});

it('Test the timesince with mon Sep 5 2022 08:30:29 GMT+0000', () => {
    const date = timeSince("mon Sep 5 2022 08:30:29 GMT+0000");
    expect(date).toEqual('19 day(s) ago')

});
it('Test the timesince with tue Sep 6 2022 08:30:29 GMT+0000', () => {
    const date = timeSince("tue Sep 6 2022 08:30:29 GMT+0000");
    expect(date).toEqual('18 day(s) ago')

});
it('Test the timesince with web Sep 7 2022 08:30:29 GMT+0000', () => {
    const date = timeSince("web Sep 7 2022 08:30:29 GMT+0000");
    expect(date).toEqual('17 day(s) ago')

});


