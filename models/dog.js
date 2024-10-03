// import modules and dependencies
import { v4 as Id } from 'uuid';

const dogs = [
    {
        id: Id(),
        name: 'React',
        breed: "Akita Inu",
        desc: "Akitas are burly, heavy-boned spitz-type dogs of imposing stature. Standing 24 to 28 inches at the shoulder, Akitas have a dense coat that comes in several colors, including white. The head is broad and massive, and is balanced in the rear by a full, curled-over tail.",
        img: 'https://www.dogster.com/wp-content/uploads/2024/03/happy-akita-inu-dog-resting-at-the-park_Kristina-Chizhmar_Shutterstock.jpg'
    },
    {
        id: Id(),
        name: 'JS',
        breed: "Shiba Inu",
        desc: "The Shiba Inu dog is a foxy looking medium sized Spitz type breed, with the pricked ears, a thick coat, and curled tail typical of the type. As the name suggests, this popular breed is native to Japan and is among the world's oldest dog breeds.",
        img: 'https://media-be.chewy.com/wp-content/uploads/2021/05/27135654/Shiba-Inu_FeaturedImage-1024x615.jpg'
    },
    {
        id: Id(),
        name: 'Node',
        breed: "Siberian Husky",
        desc: "A graceful dog with erect ears and a dense soft coat, the Siberian Husky stands 20 to 24 inches (51 to 61 cm) tall at the withers and weighs 35 to 60 pounds (16 to 27 kg). It is usually gray, tan, or black and white, and it may have head markings resembling a cap, a mask, or spectacles.",
        img: 'https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg'
    },
    {
        id: Id(),
        name: 'CSS',
        breed: "Labrador",
        desc: "The sweet-faced, lovable Labrador Retriever is one of America's most popular dog breeds, year after year. Labs are friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.",
        img: 'https://americaware.com/wp-content/uploads/2023/07/LabRetriever.jpg'
    }
];

class Dogs {
    static getAllDogs() {
        return dogs;
    }
    static getDogById(id) {
        return dogs.find((dog) => dog.id === id);
    }
    static add(dog) {
        const newDog = {
            id: Id(),
            ...dog
        };
        dogs.push(newDog);
        return newDog;
    }
}

export default Dogs;