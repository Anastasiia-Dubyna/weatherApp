const saveFavoriteBtn = document.querySelector('.saveFavoriteBtn');

export const btnAddFavorite = () => {
  saveFavoriteBtn.classList.add('inFavorite');
  saveFavoriteBtn.disabled = true;
};

export const btnRemoveFavorite = () => {
  saveFavoriteBtn.classList.remove('inFavorite');
  saveFavoriteBtn.disabled = false;
};
