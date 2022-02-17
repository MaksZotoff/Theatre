const db = require("../models");

const Performance = db.performance;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
    }

    const performance = {
        //id_performance: req.body.id_performance,
        title: req.body.title,
        autor: req.body.autor,
        genre: req.body.genre,
        duration: req.body.duration
    };



    Performance.create(performance)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the data."
        });
    });
};



exports.findAll = (req, res) =>{
    const id_performance = req.query.id_performance;

    var condition = id_performance ? {id_performance: {[Op.like]: `%${id_performance}%`} } : null;
    
    Performance.findAll({  where: condition    })
    .then( performance =>{   res.send(performance); })
    .catch( err =>{     res.status(500).send( { message: err.message });});
};


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
exports.findOne = (req, res) => {
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    const id_performance = req.params.id;
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    var condition = id_performance ? {id_performance: {[Op.eq]: `${id_performance}`} } : null;
    Performance.findOne({  where: condition    })
    .then( performance =>{
        res.send(performance);
    })
    .catch( err =>{
        res.status(500).send( { message: err.message });
    });
};

exports.update = (req, res) =>{
    const id_performance = req.params.id;
    var condition = id_performance ? {id_performance: {[Op.eq]: `${id_performance}`} } : null;

        Performance.update(req.body, {
            where: { condition }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Performance was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Performance with id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Error updating Performance with id=" + id
            });
        });
};

exports.delete = (req, res) =>{
    const id_performance = req.params.id;

    Performance.destroy({
        where: {   id_performance: id_performance }
    })

    .then(num => {
        if (num == 1) {
        res.send({
            message: "Performance was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Performance with id=${id_performance}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Could not delete Performance with id=" + id_performance
        });
    });
};

