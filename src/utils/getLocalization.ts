// TODO: create a hook for this
const getLocalization = async (lang: string = "en", file: string) => {
	if (!file) throw new Error("file name must be provided");

	const text = await import(`../localization/${lang}/${file}.json`, {
		assert: { type: "json" },
	});

	return text.sidebar;
};
export default getLocalization;
