module.exports = function(sequelize, DataTypes) {
	const vr_list = sequelize.define('vr_list', {
		title: {
			type: DataTypes.STRING,
			allNull: true
		}
	});
	return vr_list;
};