export const getGifs = async (category) => {
  let url = ''
  if (category) {
    url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&offset=0&api_key=7k3Ih4OwP5cHNULQYKXKE63TRA1I3KI2`
  } else {
    url = 'https://api.giphy.com/v1/gifs/trending?limit=10&offset=0&api_key=7k3Ih4OwP5cHNULQYKXKE63TRA1I3KI2'
  }
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  // console.log(gifs)
  return gifs
}

// export const getTrendingSearch = async () => {
//   const url = 'https://api.giphy.com/v1/trending/searches?api_key=7k3Ih4OwP5cHNULQYKXKE63TRA1I3KI2'
//   const response = await fetch(url)
//   const { data } = await response.json()
// }
