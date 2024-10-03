import Dogs from '../models/dog.js';

const dogControllers = {
    getAllDogs: (req, res) => {
        const dogs = Dogs.getAllDogs();
        const token = req.cookies.token;
        const email = req.cookies.email;
        res.status(200).render('dogs', { dogs, token, email });
    },
    getDogById: (req, res) => {
        const { id } = req.params;
        const dog = Dogs.getDogById(id);
        if (dog) {
            res.status(200).render('dog', { dog });
        } else {
            res.status(404).render('404', {
                title: 'No dogs',
                message: 'Dog not found'
            });
        }
    },
    addDogForm: (req, res) => {
        res.status(200).render('add-dog-form');
    },
    addDog: (req, res) => {
        const { name, breed, img } = req.body;
        if (name && breed && img) {
            Dogs.add({ name, breed, img });
            res.status(302).redirect('/api/dogs');
        } else {
            res.status(404).render('404', {
                title: 'Bad request',
                message: 'All fields are required'
            });
        }
    }
};

export default dogControllers;