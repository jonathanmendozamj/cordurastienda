export const createAdaptedCategoryFromFirestore = (doc) => {
	const data = doc.data();

	const formattedCategory = {
		id: doc.id,
		...data
	};

	return formattedCategory;
};