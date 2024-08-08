import { Schema, model, models } from "mongoose";

/*
    Property Model
  - owner: ObjectId, ref: User, required
  - name: String, required
  - description: String
  - type: String, required
  - location: Object
    - street: String
    - city: String
    - state: String
    - zipcode: String
  - beds: Number, required
  - baths: Number, required
  - square_feet: Number, required
  - amenities: Array of Strings
  - rates: Object
    - nightly: Number
    - weekly: Number
    - monthly: Number
  - seller_info: Object
    - name: String
    - email: String
    - phone: String
  - images: Array of Strings
  - is_featured: Boolean, default: false
*/

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = models.Property || model("Property", PropertySchema);

export default Property;
