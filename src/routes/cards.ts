import * as express from 'express';

import { CardModel } from './models/card';
import { Database } from './database/connector';

class CardRouter {
  db: Database;
  router: express.Router
  constructor(db: Database) {
    this.db = db; 
    /* Cards router */
    this.router = express.Router();
  }

  initRouter = (): express.Router => {
    /**
     * Gets the universe of cards for a user.
     * @route GET /cards
     * @group Cards - Operations about cards.
     * @returns {Array<Card>} 200 - All cards for given user.
     * @returns {Error}  500 - Unexpected error
     */
    this.router.get('/', (req, res, next) => {
      res.send('Respond with card universe');
    });

    /**
     * Gets a card by it's SHID
     * @route GET /cards/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @returns {Card.model} 200 - A card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.get('/:shid', (req, res, next) => {
      res.send(req.params);
    });

    /**
     * Gets a tree by it's root's SHID. 
     * Note: the number of allowed tree levels is infinite, even though the schema only uses two levels.
     * @route GET /cards/tree/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - tree root shid
     * @returns {TreeNode.model} 200 - A card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.get('/tree/:shid', (req, res, next) => {
      res.send(req.params);
    });

    /**
     * Gets the leaf nodes of a tree, that has a root with given SHID
     * @route GET /cards/leafs/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @returns {Array<Card>} 200 - A card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.get('/leafs/:shid', (req, res, next) => {
      res.send(req.params);
    });

    /**
     * Propagates the tags from children to it's parents, recursively.
     * This operation starts from the leafs and builds up, stopping when a particular level does not propagate to it's parents.
     * The propagation is defined as copying a particular tag to a parent card when all the parent's children also have this tag.
     * @route GET /cards/propagate/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @returns {Array<Card>} 200 - A card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.put('/propagate/:shid', (req, res, next) => {
      res.send(req.params);
    });

    /**
     * Finds cards that match a particular name
     * @route GET /cards/search/:name
     * @group Cards - Operations about cards
     * @param {string} name.query.required - card name
     * @returns {Array<Card>} 200 - Cards that have a name that match partially (or completely) the input string, ordered by best match.
     * @returns {Error}  500 - Unexpected error
     */
    this.router.get('/search/:name', (req, res, next) => {
      res.send(req.params);
    });


    /**
     * Creates a card
     * @route POST /cards
     * @group Cards - Operations about cards
     * @returns {Card.model} 201 - Created card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.post('/', (req, res, next) => {
      res.send('create card');
    });


    /**
     * Renames a card
     * @route PUT /cards/:shid/rename/:new_name
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @param {string} new_name.query.required - card new name
     * @returns {Card.model} 200 - Renamed card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.put('/:shid/rename/:new_name', (req, res, next) => {
      res.send(req.params);
    });


    /**
     * Assigns a tag to a card
     * @route PATCH /cards/:shid/assign/:tag_shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @param {string} tag_shid.query.required - tag shid
     * @returns {Card.model} 200 - Updated card
     * @returns {Error}  500 - Unexpected error
     */
    this.router.patch('/:shid/assign/:tag_shid', (req, res, next) => {
      res.send(req.params)
    });

    /**
     * Deletes a card
     * @route DELETE /cards/:shid
     * @group Cards - Operations about cards
     * @param {string} shid.query.required - card shid
     * @returns {Card.model} 204 - Delete succesfully
     * @returns {Error}  500 - Unexpected error
     */
    this.router.delete('/:shid', (req, res, next) => {
      res.send(req.params);
    });
    return this.router;
  }

}

module.exports = (db: any) => { 
  const cardRouter = new CardRouter(db);
  return cardRouter.initRouter();
}
