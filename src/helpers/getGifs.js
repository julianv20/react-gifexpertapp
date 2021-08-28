export const getGifs = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YYfpEsSQt9tuUZkPHvraAxCbghWhiw5e&q=${encodeURI(
      category
    )}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        tittle: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };
