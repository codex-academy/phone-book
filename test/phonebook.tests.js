describe("The phonebook", function(){
	
	it("should be able to add a user and find a user", function() {
		const phoneBook = PhoneBook();
		phoneBook.addNumber("Linda", "082 123 4500");
		assert.equal("082 123 4500", phoneBook.getNumber("Linda"));
	});

	it("should not add duplicate users", function() {
		const phoneBook = PhoneBook();
		const userList = phoneBook.getNumbers();
		phoneBook.addNumber("Linda", "082 123 4500");
		phoneBook.addNumber("Linda", "082 123 4522");
		
		assert.equal(1, userList.length);
		assert.equal("082 123 4500", phoneBook.getNumber("Linda"));

	});

	it("should be able to add more than one user", function() {
		const phoneBook = PhoneBook();
		phoneBook.addNumber("Linda", "082 123 4500");
		phoneBook.addNumber("Jonah", "083 123 3667");
		const userList = phoneBook.getNumbers();
		
		assert.equal(2, userList.length);
		
		assert.equal("Linda", userList[0].name);
		assert.equal("082 123 4500", userList[0].number);

		assert.equal("Jonah", userList[1].name);
		assert.equal("083 123 3667", userList[1].number);

	});

});