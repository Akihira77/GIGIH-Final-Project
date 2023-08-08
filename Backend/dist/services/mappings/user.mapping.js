const userMap = async (data) => {
    const userDtos = data.map((e) => {
        return { username: e.username };
    });
    return userDtos;
};
export default userMap;
