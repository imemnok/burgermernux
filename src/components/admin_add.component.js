import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {postFetch} from '../hooks/api'

export default function Add(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [options, setOptions] = useState({
    protein: [],
    cheese: [],
    adds: [],
    veg: [],
    sauce: [],
  });

  const optionList = [
    {
      protein: {
        enum: ["burger", "chicken", "veggie"],
        default: "burger",
        type: "text",
      },
      cheese: {
        enum: ["swiss", "cheddar", "pepperjack", "american", "blue"],
        type: "text",
      },
      adds: {
        enum: ["bacon", "avacado"],
        type: "select",
      },
      veg: {
        enum: [
          "onions",
          "tomato",
          "lettuce",
          "mushrooms",
          "grilledonions",
          "pickles",
        ],
        type: "select",
      },
      sauce: {
        enum: ["mayo", "ketchup", "mustard", "special"],
        type: "select",
      },
    },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(options);

    const menuItem = {
      name: name,
      description: description,
      category: category,
      image: image,
      price: price,
      options: options.length > 1 ? options: {},
    };
    console.log(menuItem);
    fetch("http://localhost:4001/menu/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuItem),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  };
  const handleOptions = (e, evt) => {
    if (typeof evt === "object") {
      var selected = [...evt].map((o) => o.value);
    } else {
       selected = evt;
    }
    setOptions((prevState) => ({
      ...prevState,
      [e]: selected,
    }));
  };
  return (
    <div className="more-body">
      <Form onSubmit={handleSubmit}>
        <Form.Group control="formadditem">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            key="name"
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Item Category</Form.Label>
          <Form.Control
            key="category"
            type="text"
            placeholder="Item Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Form.Label>Item Description</Form.Label>
          <Form.Control
          key="description"
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Form.Label>Item Image</Form.Label>
          <Form.Control
          key="image"
            type="text"
            placeholder="Item Image href"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Form.Label>Item Price</Form.Label>
          <Form.Control
          key="price"
            type="text"
            placeholder="Item Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Form.Label>Options</Form.Label>
          <div></div>
          {optionList.map((option) =>
            Object.keys(option).map((e) => {
              let type = option[e].type;
              return (
                <>
                  <Form.Label key={e}>{e}</Form.Label>
                  {type === "text" && (
                    <Form.Control
                      key={e + 1}
                      as="select"
                      // value={options[e]}
                      onChange={(evt) => handleOptions(e, evt.target.value)}
                    >
                      {option[e].enum.map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </Form.Control>
                  )}
                  {type === "select" && (
                    <Form.Control
                    key={e + 2}
                      as="select"
                      multiple
                      // value={options[e]}
                      onChange={(evt) =>
                        handleOptions(e, evt.target.selectedOptions)
                      }
                    >
                      {option[e].enum.map((v) => (
                        <option key={v}>{v}</option>
                      ))}
                    </Form.Control>
                  )}
                </>
              );
            })
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
