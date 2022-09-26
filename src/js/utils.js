
/**
 * 
 * @param {src,categorie,rank} songs 
 * @returns array [{name,author,categories,rank,src}]
 */
export const createSongsObject = (songs) => {
  let newSongs = [];

  songs.forEach(song => {
    const name = song.src.replace(`songs/`, ``).split(`-`)[0].replaceAll(`_`, ` `);
    const author = song.src.replace(`songs/`, ``).split(`-`)[1].replaceAll(`_`, ` `).replace(`.mp3`, ``).toUpperCase();

    const categories = song.categories.map(categorie => `${categorie},`);
    categories[categories.length - 1] = song.categories[categories.length - 1];

    newSongs.push({
      name: name,
      author: author,
      categories: categories,
      rank: song.rank,
      src: song.src,
    });

  });

  return newSongs;
};
