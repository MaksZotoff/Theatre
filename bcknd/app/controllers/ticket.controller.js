const db = require("../models");

const Ticket = db.ticket;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.place) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    return;
    }

    const ticket = {
        //id_ticket: req.body.id_ticket,
        
        place: req.body.place,
        price: req.body.price,
        id_performance: req.body.id_performanc,
    };



    Ticket.create(ticket)
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
    const id_ticket = req.query.id_ticket;

    var condition = id_ticket ? {id_ticket: {[Op.like]: `%${id_ticket}%`} } : null;
    
    Ticket.findAll({  where: condition    })
    .then( ticket =>{   res.send(ticket); })
    .catch( err =>{     res.status(500).send( { message: err.message });});
};


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
exports.findOne = (req, res) => {
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    const id_ticket = req.params.id;
    /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

    var condition = id_ticket ? {id_ticket: {[Op.eq]: `${id_ticket}`} } : null;
    Ticket.findOne({  where: condition    })
    .then( ticket =>{
        res.send(ticket);
    })
    .catch( err =>{
        res.status(500).send( { message: err.message });
    });
};

exports.update = (req, res) =>{
    const id_ticket = req.params.id;
    var condition = id_ticket ? {id_ticket: {[Op.eq]: `${id_ticket}`} } : null;

        Ticket.update(req.body, {
            where: { condition }
        })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Ticket was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Ticket with id=${id}.`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Error updating Ticket with id=" + id
            });
        });
};

exports.delete = (req, res) =>{
    const id_ticket = req.params.id;

    Ticket.destroy({
        where: {   id_ticket: id_ticket }
    })

    .then(num => {
        if (num == 1) {
        res.send({
            message: "Ticket was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Ticket with id=${id_ticket}.`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Could not delete Ticket with id=" + id_ticket
        });
    });
};

