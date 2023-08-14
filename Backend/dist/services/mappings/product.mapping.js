export const productMap = async (data) => {
    const productDtos = data.map(({ title, price, url, image }) => {
        return { title, price, url, image };
    });
    return productDtos;
};
export const videoProductMap = async (data) => {
    const videoProductDtos = data.map(({ id, title, price, url, userId, image }) => {
        return {
            id: id,
            title: title,
            price: price,
            url: url,
            userId: userId,
            image: image,
        };
    });
    return videoProductDtos;
};
