export const productMap = async (data) => {
    const productDtos = data.map((e) => {
        return { title: e.title, price: e.price, url: e.url };
    });
    return productDtos;
};
export const videoProductMap = async (data) => {
    const videoProductDtos = data.map((e) => {
        return { id: e._id, title: e.title, price: e.price, url: e.url };
    });
    return videoProductDtos;
};
