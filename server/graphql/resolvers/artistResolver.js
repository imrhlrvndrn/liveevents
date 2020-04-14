const Artist = require('../../models/Artist');
const User = require('../../models/User');
const Event = require('../../models/Event');
const { transformArtist } = require('../helpers/helper');

module.exports = {
    artists: async () => {
        const artists = await Artist.find({});

        return artists.map((artist) => {
            return transformArtist(artist);
        });
    },
    createArtist: async (args) => {
        // let totalAmount =
        //     baseAmount * numberOfTicketsForAdults + (baseAmount * numberOfTicketsForChildren) / 2;

        const newArtist = new Artist({
            entity: 'Artist',
            eventId: '5e92ff22aac0a018247e230b',
            userId: '5e904ee796f04a0948c1c14c',
            isFree: args.artistInput.isFree || false,
            isHidden: args.artistInput.isHidden || false,
            type: args.artistInput.type,
            genres: [...args.artistInput.genres],
            topics: [...args.artistInput.topics],
            sort_order: args.artistInput.sort_order,
            role: args.artistInput.role,
            artistAmountInfo: {
                numberOfTicketsForAdults: null,
                numberOfTicketsForChildren: null,
                tier: null,
                baseAmount: args.artistInput.artistAmountInfo.baseAmount,
                taxInfo: [{ taxName: 'GST', taxPercentage: 18 }],
                totalAmount: args.artistInput.artistAmountInfo.baseAmount,
                discountedAmount: 0,
                isPaid: false,
                paidAmount: 0,
                pendingAmount: args.artistInput.artistAmountInfo.baseAmount,
                totalInstallments: args.artistInput.artistAmountInfo.totalInstallments || 0,
            },
        });

        try {
            const savedNewArtist = await newArtist.save();

            const event = await Event.findById(savedNewArtist.eventId);
            event.artists.push(savedNewArtist);
            await event.save();

            return transformArtist(savedNewArtist);
        } catch (error) {
            throw error;
        }
    },
    updateArtist: async (args) => {
        const artistToBeUpdated = await Artist.findById(args.artistId);
        if (!artistToBeUpdated) throw new Error('No artist found!');

        let { isFree, isHidden, type, genres, topics, sort_order, role } = args.updateArtistInput;

        if (isFree != undefined) {
            artistToBeUpdated.isFree = isFree;
        }
        if (isHidden != undefined) {
            artistToBeUpdated.isHidden = isHidden;
        }
        if (type != undefined) {
            artistToBeUpdated.type = type;
        }
        if (genres != undefined) {
            let filteredList = [];

            originalList = artistToBeUpdated.genres.map((originalGenre) => {
                return originalGenre.toLowerCase();
            });

            genres.forEach((genre) => {
                if (!originalList.includes(genre.toLowerCase())) filteredList.push(genre);
            });

            artistToBeUpdated.genres = [...artistToBeUpdated.genres, ...filteredList];
        }
        if (topics != undefined) {
            let filteredList = [];

            originalList = artistToBeUpdated.topics.map((originalTopic) => {
                return originalTopic.toLowerCase();
            });

            topics.forEach((topic) => {
                if (!originalList.includes(topic.toLowerCase())) filteredList.push(topic);
            });

            artistToBeUpdated.topics = [...artistToBeUpdated.topics, ...filteredList];
        }
        if (sort_order != undefined) {
            artistToBeUpdated.sort_order = sort_order;
        }
        if (role != undefined) {
            artistToBeUpdated.role = role;
        }

        await artistToBeUpdated.save();
        return transformArtist(artistToBeUpdated);
    },
    deleteArtist: async (args) => {
        const deletedArtist = await Artist.findByIdAndDelete(args.artistId);

        const event = await Event.findById(deletedArtist.eventId);
        event.artists.pull(deletedArtist._id);
        await event.save();

        return transformArtist(deletedArtist);
    },
};
