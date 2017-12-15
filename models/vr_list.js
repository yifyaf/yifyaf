module.exports = function(sequelize, DataTypes) {
	const vr_list = sequelize.define('vr_list', {
		title: {
			type: DataTypes.STRING,
			allNull: true
		},
		url: {
			type: DataTypes.STRING,
			allNull: false
		},
		img: {
			type: DataTypes.STRING,
			allNull: true,
		},
		gif: {
			type: DataTypes.STRING,
			allNull: true,
		},
		tag: {
			type: DataTypes.STRING,
			allNull: true,
		}
	});
	return vr_list;
};