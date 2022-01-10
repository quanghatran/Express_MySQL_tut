let getHomepage = async (req, res) => {
	// const [rows, fields] = await pool.execute('SELECT * FROM users');

	return res.render("index.ejs");
};

export default { getHomepage };
