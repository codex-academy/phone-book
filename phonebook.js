function PhoneBook() {
    const userList = []
    const addNumber = (name, number) => {
        if(name && number) {
            if(getNumber(name) == null) {
                userList.push({ name, number})
            }
        }
    }
    
    const getNumber = (name) => {
        const user = userList.find((userObj) => {
            return userObj.name == name;
        })
        return (user) ? user.number : null;
    }

    const getNumbers = () => {
        return userList;
    }

    return {
        addNumber,
        getNumber,
        getNumbers
    }
}