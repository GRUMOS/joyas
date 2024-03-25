import { getJoyasLimitModel } from '../model/joyas.model.js';
import HATEOAS from '../utils/hateoas.js';
import {ERRORS} from '../utils/errors.js';

export const getJoyasLimitController = async (req, res) => {
  try {
    const { order_by, limits, page } = req.query;
    const results = await getJoyasLimitModel(order_by, limits, page);
    const hateos = await HATEOAS(results.rows, results.count)
 
    res.status(200).json(hateos);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(ERRORS[error.code] || { error: "Internal error server" });
  }
};


