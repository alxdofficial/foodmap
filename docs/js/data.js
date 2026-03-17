window.FOOD_MAP_DATA = {
  regions: [
    // =========================================================================
    // CHINA
    // =========================================================================
    {
      id: "sichuan",
      name: "Sichuan",
      country: "China",
      center: [30.57, 104.07],
      size: "large",
      flavorBases: [
        {
          name: "Mala (Numbing-Spicy)",
          ingredients: ["sichuan_pepper", "dried_chili", "doubanjiang", "garlic", "ginger"],
          description: "The signature numbing-spicy combination of Sichuan peppercorn and dried chilies, often built on a base of fermented chili bean paste.",
          recipes: [
            { name: "Mapo Tofu", description: "Silken tofu braised in a fiery sauce of doubanjiang, ground pork, and Sichuan peppercorn." },
            { name: "Shui Zhu Yu (Water-Boiled Fish)", description: "Poached fish fillets swimming in a sea of chili oil, dried chilies, and numbing Sichuan pepper." },
            { name: "Laziji (Chongqing Chicken)", description: "Wok-fried chicken pieces buried under a mountain of dried chilies and Sichuan peppercorns." },
            { name: "Dan Dan Mian", description: "Wheat noodles in a spicy, savory sauce of chili oil, Sichuan pepper, preserved vegetables, and minced pork." }
          ]
        },
        {
          name: "Garlic-Ginger-Scallion",
          ingredients: ["garlic", "ginger", "scallion", "soy_sauce", "vinegar"],
          description: "A more subtle aromatic base used in everyday Sichuan cooking, balancing pungent alliums with soy and vinegar.",
          recipes: [
            { name: "Hui Guo Rou (Twice-Cooked Pork)", description: "Sliced boiled pork belly stir-fried with leeks, garlic, and doubanjiang until caramelized." },
            { name: "Yu Xiang Qiezi (Fish-Fragrant Eggplant)", description: "Braised eggplant in a sweet-sour-spicy sauce of garlic, ginger, scallion, and pickled chili." },
            { name: "Suan Ni Bai Rou (Garlic White Pork)", description: "Chilled sliced pork belly dressed in a potent garlic-chili-soy dipping sauce." }
          ]
        }
      ]
    },
    {
      id: "cantonese",
      name: "Cantonese (Guangdong)",
      country: "China",
      center: [23.13, 113.26],
      size: "large",
      flavorBases: [
        {
          name: "Ginger-Scallion-Soy",
          ingredients: ["ginger", "scallion", "soy_sauce", "oyster_sauce", "sesame_oil"],
          description: "Clean, light flavors that emphasize the natural taste of fresh ingredients, using ginger and scallion as aromatic foundations.",
          recipes: [
            { name: "Steamed Whole Fish", description: "Fresh fish steamed with ginger and scallion, finished with a drizzle of hot oil and light soy sauce." },
            { name: "White Cut Chicken (Bai Qie Ji)", description: "Gently poached whole chicken served at room temperature with a ginger-scallion oil dip." },
            { name: "Wonton Noodle Soup", description: "Shrimp and pork wontons in a clear broth, served over thin egg noodles with scallion." },
            { name: "Char Siu (Cantonese BBQ Pork)", description: "Pork shoulder marinated in a sweet soy and honey glaze, roasted until lacquered and caramelized." }
          ]
        }
      ]
    },
    {
      id: "hunan",
      name: "Hunan",
      country: "China",
      center: [28.23, 112.94],
      size: "medium",
      flavorBases: [
        {
          name: "Fresh Chili and Fermented",
          ingredients: ["chili", "garlic", "fermented_paste", "ginger", "scallion"],
          description: "Bold, direct heat from fresh and pickled chilies, with deeply savory fermented elements and heavy use of smoked and cured ingredients.",
          recipes: [
            { name: "Chairman Mao's Red-Braised Pork", description: "Cubes of pork belly slow-braised in soy sauce, sugar, dried chilies, and star anise until meltingly tender." },
            { name: "Duo Jiao Yu Tou (Steamed Fish Head with Chopped Chili)", description: "A massive fish head steamed under a blanket of fermented chopped red chilies and garlic." },
            { name: "Xiang Xi Fei Niu Rou (Hunan Cumin Beef)", description: "Dry-fried beef strips tossed with fresh chilies, cumin, and garlic until intensely flavored." },
            { name: "La Rou (Hunan Smoked Pork)", description: "Pork cured with salt and chili, then smoked over tea and camphor wood, sliced and stir-fried with garlic shoots." }
          ]
        }
      ]
    },
    {
      id: "beijing",
      name: "Beijing (Jing)",
      country: "China",
      center: [39.90, 116.40],
      size: "medium",
      flavorBases: [
        {
          name: "Soy-Vinegar-Sesame",
          ingredients: ["soy_sauce", "vinegar", "sesame_oil", "scallion", "garlic"],
          description: "Northern Chinese cooking built on wheat-based staples with bold soy and vinegar seasonings, sesame richness, and aromatic alliums.",
          recipes: [
            { name: "Peking Duck", description: "Whole duck roasted until the skin is lacquered and crispy, carved tableside and served with thin pancakes, scallion, cucumber, and hoisin sauce." },
            { name: "Zhajiangmian", description: "Thick hand-pulled wheat noodles topped with a savory fermented soybean paste sauce with diced pork, cucumber, and radish." },
            { name: "Jianbing", description: "A crispy savory crepe made from mung bean batter, filled with egg, scallion, cilantro, and a crunchy fried cracker with sweet bean and chili sauce." },
            { name: "Lamb Hot Pot (Shuan Yangrou)", description: "Paper-thin slices of lamb swished in boiling broth and dipped in sesame paste with fermented tofu and chili oil." }
          ]
        }
      ]
    },
    {
      id: "shandong",
      name: "Shandong (Lu)",
      country: "China",
      center: [36.67, 116.99],
      size: "medium",
      flavorBases: [
        {
          name: "Vinegar-Garlic-Scallion",
          ingredients: ["vinegar", "garlic", "scallion", "soy_sauce", "ginger"],
          description: "A hearty northern Chinese flavor profile emphasizing vinegar's tang, garlic's punch, and the rich savory depth of soy, often with bold use of scallion.",
          recipes: [
            { name: "Tang Cu Li Ji (Sweet and Sour Pork Loin)", description: "Crispy battered pork loin pieces glazed in an authentic vinegar-sugar sauce, the original sweet-and-sour dish." },
            { name: "Cong Shao Hai Shen (Braised Sea Cucumber with Scallion)", description: "Sea cucumber slow-braised in a rich scallion-infused soy sauce, a hallmark of Lu cuisine banquet dishes." },
            { name: "Jiu Zhuan Da Chang (Nine-Turn Large Intestine)", description: "Pork intestines braised and rolled in a complex sweet-sour-spicy sauce with vinegar, sugar, and pepper." },
            { name: "Ba Si Di Gua (Candied Sweet Potato)", description: "Deep-fried sweet potato pieces coated in a hot caramel that pulls into glistening threads." }
          ]
        }
      ]
    },
    {
      id: "yunnan",
      name: "Yunnan",
      country: "China",
      center: [25.04, 102.71],
      size: "medium",
      flavorBases: [
        {
          name: "Mushroom-Herb-Chili",
          ingredients: ["mushroom", "chili", "mint", "garlic", "fermented_paste"],
          description: "A unique Chinese cuisine influenced by Southeast Asian neighbors, featuring wild mushrooms, fresh herbs, and bright, sour flavors.",
          recipes: [
            { name: "Crossing the Bridge Noodles", description: "Rice noodles served with a rich chicken broth and platters of raw ingredients that cook in the hot soup at the table." },
            { name: "Wild Mushroom Hot Pot", description: "A bubbling pot of mixed wild Yunnan mushrooms simmered in a light broth with chili dipping sauces." },
            { name: "Er Kuai (Fried Rice Cakes)", description: "Thick rice cakes grilled or fried and served with savory or sweet toppings, a Kunming street staple." },
            { name: "Rushan (Fried Milk Fan)", description: "Bai minority cheese made from goat milk, stretched into thin sheets, grilled, and drizzled with rosewater syrup." }
          ]
        }
      ]
    },
    {
      id: "xinjiang",
      name: "Xinjiang",
      country: "China",
      center: [43.79, 87.60],
      size: "medium",
      flavorBases: [
        {
          name: "Cumin-Chili-Lamb",
          ingredients: ["cumin", "chili", "sichuan_pepper", "onion", "garlic"],
          description: "Central Asian-influenced flavors centered on bold cumin and chili spicing, used primarily with lamb and flatbreads.",
          recipes: [
            { name: "Lamb Kawap (Kebabs)", description: "Skewered cubes of fat-laced lamb grilled over charcoal, dusted with ground cumin, chili flakes, and salt." },
            { name: "Da Pan Ji (Big Plate Chicken)", description: "Bone-in chicken pieces braised with potatoes, dried chilies, and Sichuan pepper in a rich sauce, served over hand-pulled noodles." },
            { name: "Laghman (Hand-Pulled Noodles)", description: "Thick hand-pulled noodles topped with a stir-fried sauce of lamb, tomatoes, peppers, and cumin." },
            { name: "Nang (Uyghur Flatbread)", description: "Crusty round flatbreads baked in a tandoor oven, often studded with sesame seeds and onion." }
          ]
        }
      ]
    },

    // =========================================================================
    // JAPAN & KOREA
    // =========================================================================
    {
      id: "japan",
      name: "Japan",
      country: "Japan",
      center: [35.68, 139.69],
      size: "large",
      flavorBases: [
        {
          name: "Dashi-Soy-Mirin",
          ingredients: ["dashi", "soy_sauce", "sake", "miso", "ginger"],
          description: "The foundational umami-rich combination of dashi stock, soy sauce, and mirin that underpins most Japanese cooking, emphasizing clean, balanced flavors.",
          recipes: [
            { name: "Miso Soup", description: "A daily staple of dashi broth enriched with dissolved miso paste, tofu, wakame seaweed, and scallion." },
            { name: "Nikujaga (Meat and Potatoes)", description: "Thinly sliced beef simmered with potatoes, onion, and carrots in a dashi-soy-mirin broth." },
            { name: "Chawanmushi", description: "Silky savory egg custard steamed with shrimp, chicken, and ginkgo nuts in a dashi-based mixture." },
            { name: "Sukiyaki", description: "Thinly sliced beef and vegetables simmered at the table in a sweet soy and mirin broth, dipped in raw egg." }
          ]
        },
        {
          name: "Miso-Sesame",
          ingredients: ["miso", "sesame", "soy_sauce", "sake", "vinegar"],
          description: "The rich fermented depth of miso combined with the nuttiness of sesame, used in dressings, glazes, and braised dishes.",
          recipes: [
            { name: "Miso-Glazed Black Cod", description: "Cod marinated for days in sweet white miso, then broiled until deeply caramelized." },
            { name: "Goma-ae (Sesame Dressed Vegetables)", description: "Blanched spinach or green beans dressed in a ground sesame, soy, and sugar sauce." },
            { name: "Tonkotsu Ramen", description: "Rich, milky pork bone broth ramen topped with chashu pork, soft egg, and sesame-accented tare." }
          ]
        }
      ]
    },
    {
      id: "korea",
      name: "Korea",
      country: "South Korea",
      center: [37.57, 126.98],
      size: "large",
      flavorBases: [
        {
          name: "Gochugaru-Garlic-Sesame",
          ingredients: ["gochujang", "garlic", "sesame", "sesame_oil", "soy_sauce"],
          description: "A bold, fermented-spicy-nutty flavor system built on gochugaru chili flakes, gochujang paste, raw garlic, and toasted sesame.",
          recipes: [
            { name: "Kimchi", description: "Napa cabbage fermented with gochugaru, garlic, ginger, fish sauce, and scallion, Korea's essential banchan." },
            { name: "Bibimbap", description: "A bowl of rice topped with seasoned vegetables, gochujang, a fried egg, and sliced beef, mixed together before eating." },
            { name: "Tteokbokki", description: "Chewy rice cakes simmered in a sweet-spicy gochujang sauce with fish cakes and scallion." },
            { name: "Bulgogi", description: "Thinly sliced beef marinated in soy sauce, sesame oil, garlic, sugar, and pear, then grilled over charcoal." }
          ]
        },
        {
          name: "Doenjang-Fermented",
          ingredients: ["miso", "garlic", "chili", "sesame_oil", "scallion"],
          description: "Deeply savory fermented soybean paste (doenjang) forms a second pillar of Korean cooking, earthier and more pungent than Japanese miso.",
          recipes: [
            { name: "Doenjang Jjigae", description: "A bubbling stew of doenjang paste with tofu, zucchini, chili, and anchovy broth, served still boiling." },
            { name: "Ssam (Lettuce Wraps)", description: "Grilled meat wrapped in lettuce or perilla leaves with ssamjang (doenjang-gochujang blend), garlic, and chili." },
            { name: "Kongnamul Guk (Soybean Sprout Soup)", description: "A clear soup of soybean sprouts seasoned with doenjang, garlic, and scallion, a common hangover remedy." }
          ]
        }
      ]
    },

    // =========================================================================
    // SOUTHEAST ASIA
    // =========================================================================
    {
      id: "thailand",
      name: "Thailand (Central)",
      country: "Thailand",
      center: [13.76, 100.50],
      size: "large",
      flavorBases: [
        {
          name: "Lemongrass-Galangal-Kaffir Lime",
          ingredients: ["lemongrass", "galangal", "kaffir_lime", "fish_sauce", "chili"],
          description: "The aromatic trinity of Thai cooking, providing bright citrus and floral notes that balance the heat of chilies and the funk of fish sauce.",
          recipes: [
            { name: "Tom Yum Goong", description: "A hot and sour shrimp soup perfumed with lemongrass, galangal, kaffir lime leaves, and bird's-eye chilies." },
            { name: "Green Curry (Gaeng Khiao Wan)", description: "Chicken or beef simmered in coconut milk with green curry paste of green chilies, lemongrass, galangal, and Thai basil." },
            { name: "Tom Kha Gai", description: "Chicken in a coconut milk soup infused with galangal, lemongrass, and kaffir lime, finished with lime juice and chili." },
            { name: "Pad Kra Pao (Holy Basil Stir-Fry)", description: "Minced pork or chicken stir-fried with garlic, chilies, and holy basil, served over rice with a fried egg." }
          ]
        },
        {
          name: "Fish Sauce-Lime-Chili",
          ingredients: ["fish_sauce", "lime", "chili", "garlic", "cilantro"],
          description: "The essential Thai dressing and seasoning combination that creates the balance of salty, sour, sweet, and spicy in salads, dips, and sauces.",
          recipes: [
            { name: "Som Tum (Green Papaya Salad)", description: "Shredded green papaya pounded with chilies, garlic, fish sauce, lime, dried shrimp, and peanuts." },
            { name: "Larb (Meat Salad)", description: "Minced pork or chicken dressed with lime juice, fish sauce, chili flakes, toasted rice powder, and fresh herbs." },
            { name: "Yam Wun Sen (Glass Noodle Salad)", description: "Glass noodles tossed with shrimp, ground pork, lime, fish sauce, chilies, and fresh herbs." }
          ]
        }
      ]
    },
    {
      id: "vietnam",
      name: "Vietnam",
      country: "Vietnam",
      center: [21.03, 105.85],
      size: "large",
      flavorBases: [
        {
          name: "Fish Sauce-Herbs-Star Anise",
          ingredients: ["fish_sauce", "star_anise", "lime", "cilantro", "mint"],
          description: "Vietnamese cooking balances aromatic warm spices with an abundance of fresh herbs and the salty depth of fish sauce, lighter and more herb-forward than its neighbors.",
          recipes: [
            { name: "Pho Bo (Beef Pho)", description: "Rice noodles in a clear, aromatic beef broth infused with star anise, cinnamon, and charred ginger, served with fresh herbs and lime." },
            { name: "Bun Cha", description: "Grilled pork patties and sliced pork belly served with rice vermicelli, herbs, and a sweet-sour fish sauce dipping broth." },
            { name: "Goi Cuon (Fresh Spring Rolls)", description: "Rice paper rolls filled with shrimp, pork, rice vermicelli, and herbs, served with hoisin-peanut dipping sauce." },
            { name: "Bun Bo Hue", description: "A fiery, complex beef and pork noodle soup from Hue, spiced with lemongrass, chili oil, and fermented shrimp paste." }
          ]
        },
        {
          name: "Lemongrass-Chili-Garlic",
          ingredients: ["lemongrass", "chili", "garlic", "fish_sauce", "scallion"],
          description: "A pungent, fragrant base for stir-fries, grilled meats, and braises, giving Vietnamese dishes their characteristic sizzle.",
          recipes: [
            { name: "Bo Luc Lac (Shaking Beef)", description: "Cubes of beef seared at high heat with garlic and served on watercress with a lime-pepper dipping sauce." },
            { name: "Ca Kho To (Caramelized Fish in Clay Pot)", description: "Catfish braised in a clay pot with caramel sauce, fish sauce, garlic, and black pepper." },
            { name: "Thit Nuong (Grilled Lemongrass Pork)", description: "Thinly sliced pork marinated in lemongrass, garlic, fish sauce, and sugar, grilled over charcoal." }
          ]
        }
      ]
    },
    {
      id: "malaysia",
      name: "Malaysia & Singapore",
      country: "Malaysia",
      center: [3.14, 101.69],
      size: "medium",
      flavorBases: [
        {
          name: "Rempah (Spice Paste)",
          ingredients: ["belacan", "coconut", "lemongrass", "galangal", "chili"],
          description: "Malaysian cooking builds on rempah, a pounded paste of shallots, chilies, lemongrass, galangal, and belacan (shrimp paste), fried in oil as the foundation of curries and stir-fries.",
          recipes: [
            { name: "Nasi Lemak", description: "Coconut milk rice served with sambal, crispy anchovies, peanuts, boiled egg, and cucumber, Malaysia's national dish." },
            { name: "Rendang", description: "Beef slowly braised in coconut milk and a rempah of lemongrass, galangal, turmeric, and chilies until dry and intensely flavored." },
            { name: "Laksa Lemak", description: "Rice noodles in a rich, spicy coconut curry broth with shrimp, tofu puffs, and bean sprouts." },
            { name: "Sambal Udang", description: "Prawns stir-fried in a fiery sambal of pounded chilies, belacan, tamarind, and sugar." }
          ]
        },
        {
          name: "Pandan-Coconut-Tamarind",
          ingredients: ["pandan", "coconut", "tamarind", "kecap_manis", "garlic"],
          description: "Sweet, fragrant, and tangy elements that complement the spice pastes, providing the rounded sweetness and acidity in Malay and Nyonya cooking.",
          recipes: [
            { name: "Assam Pedas (Sour-Spicy Fish)", description: "Fish simmered in a tamarind-chili broth with tomatoes, okra, and eggplant." },
            { name: "Kuih (Pandan Coconut Cakes)", description: "Steamed rice flour cakes flavored with pandan juice and topped with sweet grated coconut." },
            { name: "Satay", description: "Marinated skewered meat grilled over charcoal, served with a rich peanut-coconut sauce and compressed rice cakes." }
          ]
        }
      ]
    },
    {
      id: "indonesia",
      name: "Indonesia",
      country: "Indonesia",
      center: [-6.21, 106.85],
      size: "large",
      flavorBases: [
        {
          name: "Bumbu (Spice Base)",
          ingredients: ["galangal", "coconut", "kecap_manis", "tamarind", "chili"],
          description: "The Indonesian bumbu is a foundational spice paste of shallots, garlic, chilies, galangal, turmeric, and candlenuts, forming the base for curries, stir-fries, and braises.",
          recipes: [
            { name: "Nasi Goreng", description: "Indonesia's iconic fried rice, seasoned with kecap manis, shallots, garlic, chili, and topped with a fried egg." },
            { name: "Soto Ayam", description: "A fragrant chicken soup with turmeric, lemongrass, and galangal, served over rice with lime and sambal." },
            { name: "Gado-Gado", description: "Blanched vegetables, tofu, and hard-boiled eggs dressed in a rich, spiced peanut sauce." },
            { name: "Rawon", description: "East Javanese black beef soup colored with keluak nuts, spiced with galangal and lemongrass." }
          ]
        }
      ]
    },
    {
      id: "philippines",
      name: "Philippines",
      country: "Philippines",
      center: [14.60, 120.98],
      size: "medium",
      flavorBases: [
        {
          name: "Vinegar-Soy-Garlic",
          ingredients: ["vinegar", "soy_sauce", "garlic", "bay_leaf", "peppercorn"],
          description: "Filipino cooking is defined by bold sour-savory flavors using native vinegars, soy sauce, and garlic, reflecting both indigenous and Chinese-Spanish influences.",
          recipes: [
            { name: "Adobo", description: "Chicken or pork braised in vinegar, soy sauce, garlic, bay leaves, and black peppercorns, the quintessential Filipino dish." },
            { name: "Sinigang", description: "A sour soup of pork or shrimp with vegetables, made tangy with tamarind, tomatoes, or calamansi." },
            { name: "Kare-Kare", description: "Oxtail and tripe stew in a thick peanut sauce, served with fermented shrimp paste (bagoong) on the side." },
            { name: "Lechon Kawali", description: "Deep-fried pork belly with shatteringly crispy skin, served with a liver-based sarsa dipping sauce or vinegar-garlic dip." }
          ]
        }
      ]
    },
    {
      id: "myanmar",
      name: "Myanmar",
      country: "Myanmar",
      center: [16.87, 96.20],
      size: "small",
      flavorBases: [
        {
          name: "Turmeric-Shrimp Paste-Garlic",
          ingredients: ["turmeric", "belacan", "garlic", "ginger", "chili"],
          description: "Burmese cooking sits at the crossroads of Indian, Chinese, and Southeast Asian traditions, using turmeric-stained oil, fermented shrimp paste, and crispy fried garlic.",
          recipes: [
            { name: "Mohinga", description: "Myanmar's national dish of rice noodles in a rich, aromatic fish broth thickened with chickpea flour, banana stem, and lemongrass." },
            { name: "Tea Leaf Salad", description: "Fermented tea leaves tossed with crunchy fried beans, sesame seeds, dried shrimp, garlic chips, and fresh tomato." },
            { name: "Shan Noodles", description: "Rice noodles in a light broth or tossed dry with chicken, pickled mustard greens, and chili oil, from Shan State." }
          ]
        }
      ]
    },
    {
      id: "cambodia_laos",
      name: "Cambodia & Laos",
      country: "Cambodia/Laos",
      center: [11.56, 104.92],
      size: "small",
      flavorBases: [
        {
          name: "Lemongrass-Galangal-Shrimp Paste",
          ingredients: ["lemongrass", "galangal", "belacan", "lime", "chili"],
          description: "Cambodian and Lao cooking uses aromatic herbs and fermented fish pastes to build bright, pungent flavors, less fiery than Thai but equally complex in their herbaceous depth.",
          recipes: [
            { name: "Amok", description: "A Cambodian coconut curry of fish steamed in banana leaves with a kroeung paste of lemongrass, galangal, turmeric, and kaffir lime." },
            { name: "Laap", description: "A Lao national dish of minced meat or fish seasoned with lime juice, fish sauce, toasted rice powder, and abundant fresh herbs." },
            { name: "Khao Piak Sen", description: "A comforting Lao noodle soup of hand-cut tapioca noodles in a rich, starchy chicken or pork broth with fried garlic." }
          ]
        }
      ]
    },
    {
      id: "tibet_nepal",
      name: "Tibet & Nepal",
      country: "Nepal/Tibet",
      center: [27.72, 85.32],
      size: "small",
      flavorBases: [
        {
          name: "Ginger-Garlic-Cumin",
          ingredients: ["ginger", "garlic", "cumin", "turmeric", "chili"],
          description: "Himalayan cooking blends South Asian spice traditions with high-altitude staples, using warming spices like cumin, ginger, and turmeric in hearty soups, dumplings, and lentil dishes.",
          recipes: [
            { name: "Momos", description: "Steamed or fried dumplings filled with spiced minced meat or vegetables, served with a fiery tomato-chili dipping sauce." },
            { name: "Thukpa", description: "A warming Tibetan noodle soup with vegetables, meat, and a ginger-garlic broth, essential in the cold Himalayan climate." },
            { name: "Dal Bhat", description: "The daily meal of Nepal: steamed rice with spiced lentil soup, pickled vegetables, curried greens, and a meat or vegetable side." }
          ]
        }
      ]
    },

    // =========================================================================
    // SOUTH ASIA
    // =========================================================================
    {
      id: "north_india",
      name: "North India (Punjab/Mughlai)",
      country: "India",
      center: [28.61, 77.21],
      size: "large",
      flavorBases: [
        {
          name: "Garam Masala Base",
          ingredients: ["cumin", "coriander_seed", "cardamom", "cinnamon", "clove"],
          description: "The warm, aromatic garam masala spice blend, combined with onion-tomato-ginger-garlic base sauces, defines the rich curries of North India.",
          recipes: [
            { name: "Butter Chicken (Murgh Makhani)", description: "Tandoori chicken pieces simmered in a velvety tomato-cream sauce spiced with garam masala, fenugreek, and ginger." },
            { name: "Rogan Josh", description: "Slow-braised lamb in a rich sauce of yogurt, Kashmiri chili, cardamom, clove, and cinnamon." },
            { name: "Biryani", description: "Layers of basmati rice and spiced meat cooked together with saffron, fried onions, and whole spices in a sealed pot." },
            { name: "Chole (Chickpea Curry)", description: "Chickpeas braised in an onion-tomato gravy flavored with cumin, coriander, amchur, and garam masala." }
          ]
        },
        {
          name: "Ghee-Cream-Tomato",
          ingredients: ["ghee", "cream", "tomato", "onion", "ginger"],
          description: "Rich dairy and tomato form the luscious base sauces of Mughlai and Punjabi cooking, giving curries their signature silky texture.",
          recipes: [
            { name: "Dal Makhani", description: "Whole black lentils simmered overnight with kidney beans, finished with generous amounts of butter and cream." },
            { name: "Shahi Paneer", description: "Cubes of fresh cheese in a royal Mughal-style sauce of pureed onions, tomatoes, cream, and ground nuts." },
            { name: "Naan", description: "Leavened flatbread slapped onto the walls of a tandoor oven, often brushed with ghee and garlic." }
          ]
        }
      ]
    },
    {
      id: "south_india",
      name: "South India (Tamil/Kerala)",
      country: "India",
      center: [13.08, 80.27],
      size: "large",
      flavorBases: [
        {
          name: "Curry Leaf-Mustard Seed Tadka",
          ingredients: ["curry_leaf", "mustard_seed", "coconut", "tamarind", "chili"],
          description: "The sizzling tadka (tempering) of mustard seeds and curry leaves in hot oil is the hallmark of South Indian cooking, combined with coconut and tamarind for sour-rich gravies.",
          recipes: [
            { name: "Sambar", description: "A tangy, spicy lentil stew with vegetables, tamarind, and a special sambar powder, tempered with mustard seeds and curry leaves." },
            { name: "Rasam", description: "A thin, peppery, tamarind-tomato broth seasoned with cumin and curry leaves, served as a soup or over rice." },
            { name: "Dosa with Coconut Chutney", description: "Crispy fermented rice-lentil crepes served with fresh coconut chutney and sambar for dipping." },
            { name: "Kerala Fish Curry (Meen Moilee)", description: "Fish simmered in a light coconut milk sauce with curry leaves, green chilies, and raw mango or kokum." }
          ]
        }
      ]
    },
    {
      id: "bengali",
      name: "Bengali",
      country: "India",
      center: [22.57, 88.36],
      size: "medium",
      flavorBases: [
        {
          name: "Panch Phoron-Mustard",
          ingredients: ["mustard_seed", "fenugreek", "cumin", "turmeric", "chili"],
          description: "Bengali cooking uses panch phoron (a five-spice blend of fenugreek, nigella, cumin, mustard, and fennel), mustard oil, and mustard paste for pungent, distinctive flavors.",
          recipes: [
            { name: "Shorshe Ilish (Hilsa in Mustard Sauce)", description: "Hilsa fish steamed or braised in a fiery mustard seed paste with turmeric and green chilies." },
            { name: "Aloo Posto (Potato with Poppy Seeds)", description: "Potatoes cooked in a paste of white poppy seeds with green chilies and turmeric, a quintessential Bengali comfort dish." },
            { name: "Chingri Malai Curry (Prawn Coconut Curry)", description: "Prawns simmered in a delicate coconut milk and spice sauce with bay leaf and cardamom." },
            { name: "Mishti Doi (Sweet Yogurt)", description: "Yogurt sweetened with date palm jaggery, set in earthen pots to develop a caramelized flavor." }
          ]
        }
      ]
    },
    {
      id: "sri_lanka",
      name: "Sri Lanka",
      country: "Sri Lanka",
      center: [6.93, 79.84],
      size: "medium",
      flavorBases: [
        {
          name: "Roasted Spice-Coconut-Pandan",
          ingredients: ["cinnamon", "curry_leaf", "coconut", "pandan", "chili"],
          description: "Sri Lankan cooking is distinguished by its dark-roasted curry powders, liberal use of true cinnamon (native to the island), pandan leaves, and thick coconut milk.",
          recipes: [
            { name: "Sri Lankan Chicken Curry", description: "Chicken braised in roasted curry powder, coconut milk, pandan leaves, curry leaves, and tomato." },
            { name: "Pol Sambol", description: "A fiery condiment of freshly scraped coconut mixed with chili flakes, lime juice, onion, and Maldive fish." },
            { name: "Hoppers (Appa)", description: "Bowl-shaped fermented rice flour and coconut milk crepes, often with an egg cracked into the center." },
            { name: "Dhal Curry", description: "Red lentils simmered with turmeric, then enriched with a coconut milk and tempered with mustard seeds, curry leaves, and dried chilies." }
          ]
        }
      ]
    },
    {
      id: "goa",
      name: "Goa",
      country: "India",
      center: [15.50, 73.83],
      size: "small",
      flavorBases: [
        {
          name: "Vinegar-Coconut-Chili",
          ingredients: ["vinegar", "coconut", "chili", "tamarind", "garlic"],
          description: "Goan cuisine uniquely blends Indian spices with Portuguese-introduced vinegar, creating fiery and tangy curries distinct from the rest of India.",
          recipes: [
            { name: "Vindaloo", description: "A fiery pork curry marinated in vinegar and a paste of dried chilies, garlic, cumin, and cinnamon, a Goan-Portuguese classic." },
            { name: "Goan Fish Curry (Xitti Kodi)", description: "Fish simmered in a thin, tangy coconut and tamarind curry with Kashmiri chili, distinctive for its sour bite." },
            { name: "Sorpotel", description: "A rich, vinegary stew of pork offal and meat with liver, seasoned with toddy vinegar and warm spices." },
            { name: "Bebinca", description: "A layered Goan coconut cake made with coconut milk, egg yolk, ghee, and sugar, baked one layer at a time." }
          ]
        }
      ]
    },

    // =========================================================================
    // OCEANIA
    // =========================================================================
    {
      id: "polynesia",
      name: "Polynesia",
      country: "French Polynesia",
      center: [-17.73, -149.57],
      size: "small",
      flavorBases: [
        {
          name: "Coconut-Lime-Ginger",
          ingredients: ["coconut", "lime", "ginger", "chili", "taro"],
          description: "Polynesian cooking revolves around coconut in all forms, bright lime, and ginger, with earth oven cooking and raw fish preparations reflecting island traditions across the Pacific.",
          recipes: [
            { name: "Poke", description: "Cubes of raw tuna marinated in soy sauce, sesame oil, lime, and chili, a Hawaiian-Polynesian classic." },
            { name: "Laulau", description: "Pork and fish wrapped in taro and ti leaves, then slow-steamed in an underground imu oven until tender." },
            { name: "Palusami", description: "Young taro leaves baked in rich coconut cream with onion and salt, a staple across Samoa and Tonga." }
          ]
        }
      ]
    },
    {
      id: "australia",
      name: "Australia",
      country: "Australia",
      center: [-33.87, 151.21],
      size: "small",
      flavorBases: [
        {
          name: "Lemon Myrtle-Wattleseed-Native Botanicals",
          ingredients: ["lemon_myrtle", "wattleseed", "garlic", "olive_oil", "lemon"],
          description: "Modern Australian cuisine draws on indigenous bush tucker ingredients like lemon myrtle, wattleseed, and finger lime, combined with multicultural influences and local produce.",
          recipes: [
            { name: "Bush Tucker Kangaroo", description: "Kangaroo loin seasoned with lemon myrtle and wattleseed, seared rare and served with native pepper and bush tomato relish." },
            { name: "Barramundi", description: "Pan-seared Australian barramundi with lemon myrtle butter, native greens, and finger lime caviar." },
            { name: "Meat Pie", description: "A flaky-crusted pie filled with seasoned minced beef in rich gravy, a beloved Australian comfort food." }
          ]
        }
      ]
    },
    {
      id: "new_zealand",
      name: "New Zealand",
      country: "New Zealand",
      center: [-36.85, 174.76],
      size: "small",
      flavorBases: [
        {
          name: "Butter-Garlic-Ginger",
          ingredients: ["butter", "garlic", "ginger", "soy_sauce", "lime"],
          description: "New Zealand cuisine blends Maori hangi traditions with British and Pacific Rim influences, emphasizing fresh seafood, lamb, and dairy with Asian-inspired seasonings.",
          recipes: [
            { name: "Hangi", description: "A traditional Maori feast of meats and root vegetables slow-cooked in a pit oven over heated stones, imparting a smoky, earthy flavor." },
            { name: "Pavlova", description: "A crisp-shelled meringue with a marshmallow center, topped with whipped cream and fresh kiwifruit, passionfruit, and berries." },
            { name: "Whitebait Fritters", description: "Delicate juvenile fish bound with egg and pan-fried into golden patties, served with a squeeze of lemon and butter." }
          ]
        }
      ]
    },

    // =========================================================================
    // MIDDLE EAST & CENTRAL ASIA
    // =========================================================================
    {
      id: "levant",
      name: "Levant (Lebanon/Syria/Palestine)",
      country: "Lebanon",
      center: [33.89, 35.50],
      size: "large",
      flavorBases: [
        {
          name: "Olive Oil-Lemon-Garlic",
          ingredients: ["olive_oil", "lemon", "garlic", "tahini", "sumac"],
          description: "The Levantine kitchen is built on high-quality olive oil, fresh lemon juice, and raw garlic, often enriched with tahini and finished with za'atar or sumac.",
          recipes: [
            { name: "Hummus", description: "Pureed chickpeas blended with tahini, lemon juice, and garlic, drizzled with olive oil and served with flatbread." },
            { name: "Fattoush", description: "A chopped salad of vegetables and herbs with sumac dressing and crispy pieces of fried pita bread." },
            { name: "Baba Ghanoush", description: "Smoky fire-roasted eggplant mashed with tahini, lemon juice, garlic, and olive oil." },
            { name: "Musakhan", description: "Roasted chicken over taboon bread drenched in olive oil and caramelized onions spiced with sumac and allspice." }
          ]
        },
        {
          name: "Za'atar-Sumac-Herb",
          ingredients: ["sumac", "thyme", "sesame", "olive_oil", "parsley"],
          description: "The aromatic herbs and tangy sumac of za'atar define Levantine breads, salads, and grilled meats.",
          recipes: [
            { name: "Manakish Za'atar", description: "Flatbread spread with a paste of za'atar and olive oil, baked until fragrant, a common Levantine breakfast." },
            { name: "Tabbouleh", description: "A parsley-forward salad with fine bulgur, tomato, mint, lemon juice, and olive oil." },
            { name: "Shish Taouk", description: "Marinated chicken skewers grilled with lemon, garlic, yogurt, and a touch of sumac." }
          ]
        }
      ]
    },
    {
      id: "persian",
      name: "Persian (Iran)",
      country: "Iran",
      center: [35.69, 51.39],
      size: "large",
      flavorBases: [
        {
          name: "Saffron-Dried Lime-Rosewater",
          ingredients: ["saffron", "dried_lime", "barberry", "turmeric", "rosewater"],
          description: "Persian cuisine is elegant and aromatic, using saffron's golden color and musky flavor, the intense tang of dried limes, and the sweetness of barberries and rosewater.",
          recipes: [
            { name: "Tahdig (Crispy Rice)", description: "Saffron-infused steamed rice with a prized golden, crunchy crust formed at the bottom of the pot." },
            { name: "Ghormeh Sabzi", description: "A deeply herbal stew of parsley, cilantro, fenugreek, kidney beans, and lamb, soured with dried lime." },
            { name: "Zereshk Polo ba Morgh (Barberry Rice with Chicken)", description: "Saffron-scented rice studded with tart barberries, served alongside saffron-braised chicken." },
            { name: "Fesenjan", description: "A rich, tangy stew of chicken or duck in a sauce of ground walnuts and pomegranate molasses." }
          ]
        }
      ]
    },
    {
      id: "turkey",
      name: "Turkey",
      country: "Turkey",
      center: [39.93, 32.86],
      size: "large",
      flavorBases: [
        {
          name: "Paprika-Pomegranate-Yogurt",
          ingredients: ["paprika", "pomegranate", "yogurt", "sumac", "tomato"],
          description: "Turkish cooking centers on the interplay of sweet-smoky Aleppo pepper, tart pomegranate, and cooling yogurt, with tomato and onion forming rich bases.",
          recipes: [
            { name: "Iskender Kebab", description: "Thinly sliced doner lamb over pieces of pide bread, topped with tomato sauce, browned butter, and yogurt." },
            { name: "Lahmacun", description: "Razor-thin flatbread topped with a spiced lamb and vegetable mixture, rolled up with fresh herbs and lemon." },
            { name: "Kisir", description: "A fine bulgur salad dressed with pomegranate molasses, tomato paste, and Aleppo pepper, similar to tabbouleh but distinctly Turkish." },
            { name: "Imam Bayildi", description: "Whole eggplants braised in olive oil, stuffed with a sweet filling of onions, garlic, and tomatoes." }
          ]
        }
      ]
    },
    {
      id: "georgian",
      name: "Georgian (Caucasus)",
      country: "Georgia",
      center: [41.72, 44.79],
      size: "medium",
      flavorBases: [
        {
          name: "Walnut-Herb-Pomegranate",
          ingredients: ["walnut", "fenugreek", "pomegranate", "cilantro", "garlic"],
          description: "Georgian cuisine is defined by ground walnut sauces, the blue fenugreek spice blend khmeli-suneli, tart pomegranate, and lavish use of fresh herbs.",
          recipes: [
            { name: "Satsivi", description: "Cold chicken or turkey in a creamy walnut sauce seasoned with fenugreek, cinnamon, garlic, and vinegar, a Georgian New Year dish." },
            { name: "Khachapuri", description: "Cheese-filled bread shaped like a boat, filled with melted sulguni cheese and topped with a raw egg and butter." },
            { name: "Pkhali", description: "Finely chopped vegetables (spinach, beet, or eggplant) bound in a ground walnut paste with garlic, herbs, and vinegar." },
            { name: "Kharcho", description: "A hearty beef soup thickened with walnuts and rice, soured with tkemali plum sauce and spiced with garlic and cilantro." }
          ]
        }
      ]
    },
    {
      id: "uzbek",
      name: "Uzbekistan",
      country: "Uzbekistan",
      center: [41.30, 69.28],
      size: "small",
      flavorBases: [
        {
          name: "Cumin-Coriander-Garlic",
          ingredients: ["cumin", "coriander_seed", "garlic", "onion", "peppercorn"],
          description: "Uzbek cuisine centers on slow-cooked rice, grilled meats, and hearty noodle soups, seasoned with cumin, coriander, and generous amounts of onion and garlic.",
          recipes: [
            { name: "Plov", description: "The crown jewel of Uzbek cooking: rice pilaf layered with lamb, carrots, chickpeas, and whole garlic, cooked in a massive kazan over open flame." },
            { name: "Samsa", description: "Flaky baked pastries filled with spiced lamb and onion, baked in a tandoor oven until golden and crisp." },
            { name: "Lagman", description: "Hand-pulled noodles in a rich lamb and vegetable soup seasoned with cumin, coriander, and tomatoes." }
          ]
        }
      ]
    },
    {
      id: "afghan",
      name: "Afghanistan",
      country: "Afghanistan",
      center: [34.53, 69.17],
      size: "small",
      flavorBases: [
        {
          name: "Coriander-Cumin-Cardamom",
          ingredients: ["coriander_seed", "cumin", "cardamom", "turmeric", "garlic"],
          description: "Afghan cooking bridges Central and South Asian traditions, using warm spice blends with coriander and cardamom over slow-cooked meats and fragrant rice pilafs.",
          recipes: [
            { name: "Kabuli Pulao", description: "Afghanistan's national dish of basmati rice cooked with lamb, topped with caramelized carrots and raisins, scented with cardamom." },
            { name: "Mantu", description: "Large steamed dumplings filled with spiced ground beef and onion, topped with yogurt, tomato sauce, and dried mint." },
            { name: "Bolani", description: "Stuffed flatbreads filled with seasoned potatoes, leeks, or pumpkin, pan-fried until crispy and served with yogurt." }
          ]
        }
      ]
    },

    // =========================================================================
    // AFRICA
    // =========================================================================
    {
      id: "east_africa",
      name: "East Africa",
      country: "Kenya/Tanzania",
      center: [-1.29, 36.82],
      size: "medium",
      flavorBases: [
        {
          name: "Coconut-Tamarind-Spice",
          ingredients: ["coconut", "tamarind", "cumin", "coriander_seed", "turmeric"],
          description: "East African coastal cooking blends Swahili, Indian, and Arab influences, using coconut milk, tamarind, and warm spices to build fragrant rice dishes and grilled meats.",
          recipes: [
            { name: "Pilau", description: "Fragrant spiced rice cooked with meat, whole spices, and caramelized onions in a style reflecting centuries of Indian Ocean trade." },
            { name: "Nyama Choma", description: "Slowly grilled goat or beef seasoned simply with salt and served with kachumbari salad and ugali." },
            { name: "Ugali na Sukuma Wiki", description: "A staple pairing of firm cornmeal porridge with sauteed collard greens cooked with onion and tomato." }
          ]
        }
      ]
    },
    {
      id: "south_africa",
      name: "South Africa",
      country: "South Africa",
      center: [-33.93, 18.42],
      size: "medium",
      flavorBases: [
        {
          name: "Cape Malay Spice Blend",
          ingredients: ["curry_powder", "turmeric", "cinnamon", "cumin", "chili"],
          description: "Cape Malay cuisine fuses Southeast Asian spice traditions brought by enslaved peoples with local South African ingredients, creating aromatic curries and preserved meats.",
          recipes: [
            { name: "Bobotie", description: "A Cape Malay curried mince bake topped with a savory egg custard, fragrant with turmeric, cinnamon, and bay leaves." },
            { name: "Cape Malay Curry", description: "A mildly spiced, aromatic curry of lamb or chicken with apricots, almonds, and a blend of cumin, coriander, and turmeric." },
            { name: "Biltong", description: "Air-dried cured beef seasoned with coriander, black pepper, and vinegar, a South African staple snack." }
          ]
        }
      ]
    },
    {
      id: "tunisia",
      name: "Tunisia",
      country: "Tunisia",
      center: [36.81, 10.17],
      size: "small",
      flavorBases: [
        {
          name: "Harissa-Tomato-Olive Oil",
          ingredients: ["harissa", "tomato", "olive_oil", "caraway", "coriander_seed"],
          description: "Tunisian cooking is anchored by harissa, the fiery chili paste enriched with caraway and coriander, combined with tomatoes and olive oil in stews, eggs, and street food.",
          recipes: [
            { name: "Brik", description: "A crispy fried pastry of thin malsouka dough filled with egg, tuna, capers, and parsley, served with harissa." },
            { name: "Shakshuka", description: "Eggs poached in a spiced tomato and pepper sauce seasoned with cumin and harissa, scooped up with crusty bread." },
            { name: "Lablabi", description: "A humble chickpea soup ladled over torn bread and seasoned with harissa, cumin, olive oil, and a squeeze of lemon." }
          ]
        }
      ]
    },
    {
      id: "senegal",
      name: "Senegal",
      country: "Senegal",
      center: [14.69, -17.44],
      size: "small",
      flavorBases: [
        {
          name: "Peanut-Tomato-Onion",
          ingredients: ["peanut", "tomato", "onion", "chili", "fish_sauce"],
          description: "Senegalese cuisine builds on rich peanut and tomato bases, with onion and dried fish providing deep umami, reflecting the vibrant one-pot cooking traditions of West Africa.",
          recipes: [
            { name: "Thieboudienne", description: "Senegal's national dish of fish and vegetables simmered in a rich tomato sauce, served over broken rice with tangy tamarind." },
            { name: "Yassa", description: "Chicken or fish marinated in lemon and onion, then braised with mustard and olives until the onions melt into a tangy sauce." },
            { name: "Mafe", description: "A hearty stew of meat or fish in a thick, spiced peanut butter and tomato sauce, served over rice." }
          ]
        }
      ]
    },
    {
      id: "morocco",
      name: "Morocco (Maghreb)",
      country: "Morocco",
      center: [33.97, -6.85],
      size: "large",
      flavorBases: [
        {
          name: "Cumin-Cinnamon-Saffron",
          ingredients: ["cumin", "cinnamon", "saffron", "preserved_lemon", "harissa"],
          description: "Moroccan cooking layers warm sweet spices like cinnamon and saffron with earthy cumin, brightened by preserved lemon and the heat of harissa.",
          recipes: [
            { name: "Tagine with Preserved Lemon and Olives", description: "Chicken slow-cooked with preserved lemons, green olives, saffron, and ginger in a conical clay tagine pot." },
            { name: "Couscous Royale", description: "Steamed semolina couscous served with a broth of lamb, chicken, and seven vegetables spiced with saffron and cumin." },
            { name: "Harira", description: "A thick, nourishing soup of lentils, chickpeas, tomatoes, and lamb, spiced with cumin, cinnamon, and ginger, traditional for breaking Ramadan fast." },
            { name: "Pastilla (B'stilla)", description: "A layered pastry of shredded pigeon or chicken in a cinnamon-spiced sauce, wrapped in warqa pastry and dusted with powdered sugar." }
          ]
        }
      ]
    },
    {
      id: "ethiopia",
      name: "Ethiopia",
      country: "Ethiopia",
      center: [9.02, 38.75],
      size: "medium",
      flavorBases: [
        {
          name: "Berbere-Niter Kibbeh",
          ingredients: ["chili", "fenugreek", "cardamom", "turmeric", "ghee"],
          description: "Ethiopian cooking is built on berbere, a complex chili-spice blend, and niter kibbeh, a spiced clarified butter infused with ginger, garlic, and fenugreek.",
          recipes: [
            { name: "Doro Wat", description: "Chicken stewed in a thick, spicy berbere sauce with niter kibbeh and hard-boiled eggs, served on injera." },
            { name: "Kitfo", description: "Ethiopian steak tartare of finely minced raw beef seasoned with mitmita chili powder and niter kibbeh." },
            { name: "Misir Wat (Red Lentil Stew)", description: "Red lentils simmered until thick with berbere, onions, and niter kibbeh, a staple vegan dish during fasting periods." },
            { name: "Injera", description: "A spongy, sour fermented flatbread made from teff flour, used as both plate and utensil for all Ethiopian meals." }
          ]
        }
      ]
    },
    {
      id: "west_africa",
      name: "West Africa (Nigeria/Ghana)",
      country: "Nigeria",
      center: [6.52, 3.38],
      size: "large",
      flavorBases: [
        {
          name: "Scotch Bonnet-Palm Oil-Onion",
          ingredients: ["chili", "palm_oil", "onion", "tomato", "garlic"],
          description: "West African cooking is defined by the combination of fiery scotch bonnet peppers, red palm oil, and a slow-cooked tomato-onion base, often enriched with fermented locust beans (dawadawa).",
          recipes: [
            { name: "Jollof Rice", description: "One-pot rice cooked in a rich tomato-pepper sauce with onions, scotch bonnet, and a smoky char, the iconic West African party dish." },
            { name: "Egusi Soup", description: "A thick, hearty soup of ground melon seeds cooked with palm oil, leafy greens, scotch bonnet, and meat or fish." },
            { name: "Suya", description: "Thinly sliced beef threaded onto skewers, coated in yaji spice (ground peanuts, ginger, chili), and grilled over charcoal." },
            { name: "Groundnut Soup", description: "A thick peanut-based soup with chicken or goat, tomatoes, scotch bonnet, and okra, served over fufu." }
          ]
        }
      ]
    },

    // =========================================================================
    // EUROPE
    // =========================================================================
    {
      id: "provence",
      name: "Provence",
      country: "France",
      center: [43.70, 7.27],
      size: "medium",
      flavorBases: [
        {
          name: "Herbes de Provence-Olive Oil-Garlic",
          ingredients: ["thyme", "rosemary", "olive_oil", "garlic", "tomato"],
          description: "The sun-drenched flavors of southern France, built on fragrant dried herbs, fruity olive oil, garlic, and ripe tomatoes.",
          recipes: [
            { name: "Ratatouille", description: "A layered vegetable stew of eggplant, zucchini, bell peppers, and tomatoes, slowly cooked with herbes de Provence and olive oil." },
            { name: "Bouillabaisse", description: "A saffron-scented Marseille fish stew of multiple Mediterranean fish in a tomato-fennel broth, served with rouille and croutons." },
            { name: "Daube Provencale", description: "Beef braised slowly in red wine with olives, orange peel, tomatoes, and herbes de Provence." },
            { name: "Pissaladiere", description: "A Nicoise flatbread topped with sweet caramelized onions, anchovy fillets, and black olives." }
          ]
        }
      ]
    },
    {
      id: "normandy",
      name: "Normandy & Brittany",
      country: "France",
      center: [48.90, -1.18],
      size: "medium",
      flavorBases: [
        {
          name: "Butter-Cream-Shallot",
          ingredients: ["butter", "cream", "shallot", "bay_leaf", "thyme"],
          description: "The dairy-rich cooking of northern France, relying on salted butter, heavy cream, and shallots rather than olive oil and garlic.",
          recipes: [
            { name: "Moules Mariniere", description: "Mussels steamed open in white wine, shallots, butter, and parsley, served with crusty bread for dipping." },
            { name: "Sole Meuniere", description: "Dover sole dredged in flour, pan-fried in foaming butter, and finished with lemon juice, brown butter, and parsley." },
            { name: "Poulet Vallee d'Auge", description: "Chicken braised with cream, apples, and Calvados apple brandy, a signature Norman dish." },
            { name: "Galette Bretonne", description: "Crispy buckwheat crepes from Brittany, traditionally filled with ham, egg, and Gruyere cheese." }
          ]
        }
      ]
    },
    {
      id: "north_italy",
      name: "Northern Italy (Emilia-Romagna/Piedmont)",
      country: "Italy",
      center: [44.49, 11.34],
      size: "medium",
      flavorBases: [
        {
          name: "Butter-Parmesan-Nutmeg",
          ingredients: ["butter", "parmesan", "nutmeg", "onion", "wine"],
          description: "The rich, dairy-centric flavors of the Po Valley and Alps, where butter replaces olive oil and aged Parmigiano-Reggiano adds depth to pastas and risottos.",
          recipes: [
            { name: "Tagliatelle al Ragu (Bolognese)", description: "Fresh egg pasta ribbons dressed in a slow-cooked meat ragu of beef, pork, tomato, wine, and a touch of cream." },
            { name: "Risotto alla Milanese", description: "Arborio rice slowly stirred with broth, butter, and saffron, finished with Parmigiano-Reggiano until creamy." },
            { name: "Tortellini in Brodo", description: "Tiny ring-shaped pasta filled with pork, prosciutto, and Parmigiano, served in a clear capon broth." },
            { name: "Vitello Tonnato", description: "Cold sliced braised veal dressed in a creamy tuna-caper-anchovy sauce, a Piedmontese summer classic." }
          ]
        }
      ]
    },
    {
      id: "south_italy",
      name: "Southern Italy (Campania/Sicily)",
      country: "Italy",
      center: [40.85, 14.27],
      size: "medium",
      flavorBases: [
        {
          name: "Tomato-Olive Oil-Basil-Garlic",
          ingredients: ["tomato", "olive_oil", "basil", "garlic", "chili"],
          description: "The bright, sun-ripened flavors of the Italian south, where San Marzano tomatoes, extra virgin olive oil, and fresh basil form the holy trinity.",
          recipes: [
            { name: "Pizza Margherita", description: "The original Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, basil, and olive oil on a blistered crust." },
            { name: "Spaghetti alle Vongole", description: "Spaghetti tossed with fresh clams, garlic, white wine, chili flakes, and parsley." },
            { name: "Pasta alla Norma", description: "A Sicilian classic of pasta with fried eggplant, tomato sauce, basil, and salted ricotta." },
            { name: "Parmigiana di Melanzane", description: "Layers of fried eggplant, tomato sauce, mozzarella, and Parmigiano, baked until bubbling." }
          ]
        }
      ]
    },
    {
      id: "basque_spain",
      name: "Basque Country & Spain",
      country: "Spain",
      center: [40.42, -3.70],
      size: "large",
      flavorBases: [
        {
          name: "Olive Oil-Paprika-Saffron-Garlic",
          ingredients: ["olive_oil", "paprika", "saffron", "garlic", "tomato"],
          description: "Spanish cooking revolves around high-quality olive oil, smoky pimenton paprika, golden saffron, and garlic, from tapas to paellas.",
          recipes: [
            { name: "Paella Valenciana", description: "Rice cooked in a wide pan with saffron, chicken, rabbit, green beans, and snails, prized for its crispy socarrat bottom." },
            { name: "Gambas al Ajillo", description: "Sizzling shrimp cooked in a clay dish with abundant garlic, chili, and olive oil, served with crusty bread." },
            { name: "Pulpo a la Gallega", description: "Tender boiled octopus sliced and dressed with olive oil, smoked paprika, and coarse salt." },
            { name: "Patatas Bravas", description: "Crispy fried potato cubes served with a spicy tomato-paprika sauce and garlic aioli." }
          ]
        }
      ]
    },
    {
      id: "greece",
      name: "Greece",
      country: "Greece",
      center: [37.98, 23.73],
      size: "medium",
      flavorBases: [
        {
          name: "Olive Oil-Oregano-Lemon-Feta",
          ingredients: ["olive_oil", "oregano", "lemon", "feta", "dill"],
          description: "Greek cooking celebrates the simplicity of exceptional olive oil, dried oregano, fresh lemon, and tangy feta, with dill adding freshness to pies and seafood.",
          recipes: [
            { name: "Moussaka", description: "Layers of eggplant, spiced ground lamb, and creamy bechamel sauce, baked until golden." },
            { name: "Horiatiki (Greek Salad)", description: "Chunky tomatoes, cucumber, onion, olives, and a slab of feta dressed with olive oil and oregano." },
            { name: "Spanakopita", description: "Flaky phyllo pastry filled with spinach, feta, dill, and scallion." },
            { name: "Souvlaki", description: "Marinated pork or chicken skewers grilled over charcoal, served in pita with tzatziki, tomato, and onion." }
          ]
        }
      ]
    },
    {
      id: "hungary",
      name: "Hungary (Central Europe)",
      country: "Hungary",
      center: [47.50, 19.04],
      size: "medium",
      flavorBases: [
        {
          name: "Paprika-Onion-Cream",
          ingredients: ["paprika", "onion", "cream", "caraway", "garlic"],
          description: "Hungarian cooking is defined by its liberal use of sweet and hot paprika, slow-cooked onions as a base, and enrichment with sour cream.",
          recipes: [
            { name: "Goulash (Gulyas)", description: "A hearty soup-stew of beef, onions, and potatoes simmered with generous paprika and caraway seeds." },
            { name: "Chicken Paprikash (Paprikas Csirke)", description: "Chicken braised in a paprika-onion sauce, finished with sour cream and served over egg noodles or nokedli dumplings." },
            { name: "Lecso", description: "A thick stew of peppers, tomatoes, and onions cooked down with paprika, often with sausage or eggs added." },
            { name: "Toltott Kaposzta (Stuffed Cabbage)", description: "Cabbage leaves filled with a pork and rice mixture, braised in a paprika-sauerkraut sauce with sour cream." }
          ]
        }
      ]
    },
    {
      id: "scandinavia",
      name: "Scandinavia",
      country: "Sweden",
      center: [59.33, 18.07],
      size: "medium",
      flavorBases: [
        {
          name: "Dill-Mustard-Cream",
          ingredients: ["dill", "mustard_seed", "cream", "juniper", "bay_leaf"],
          description: "Scandinavian cooking emphasizes clean, restrained flavors: fresh dill, sharp mustard, rich cream, and the piney note of juniper, with a strong tradition of curing and preserving.",
          recipes: [
            { name: "Gravlax", description: "Salmon cured in a mixture of salt, sugar, and fresh dill, served sliced thin with a sweet mustard-dill sauce (hovmastarsas)." },
            { name: "Swedish Meatballs (Kottbullar)", description: "Small spiced meatballs of pork and beef in a creamy gravy, served with lingonberry jam and mashed potatoes." },
            { name: "Jansson's Temptation", description: "A gratin of potatoes, onions, and pickled sprats (ansjovis) baked in cream until golden and bubbling." },
            { name: "Smorgasbord Pickled Herring", description: "Herring fillets preserved in a sweet vinegar brine with dill, mustard, or curry, a centerpiece of the Scandinavian smorgasbord." }
          ]
        }
      ]
    },
    {
      id: "british_isles",
      name: "British Isles",
      country: "United Kingdom",
      center: [51.51, -0.13],
      size: "medium",
      flavorBases: [
        {
          name: "Mustard-Vinegar-Herb",
          ingredients: ["mustard_seed", "malt_vinegar", "peppercorn", "thyme", "butter"],
          description: "British cooking relies on sharp mustard, tangy malt vinegar, black pepper, and fresh herbs, with butter and drippings forming the base of rich roasts, pies, and puddings.",
          recipes: [
            { name: "Roast Dinner", description: "A Sunday tradition of roasted meat with Yorkshire pudding, roast potatoes, gravy, and seasonal vegetables." },
            { name: "Fish and Chips", description: "Beer-battered cod or haddock deep-fried until golden, served with thick-cut chips and doused in malt vinegar." },
            { name: "Shepherd's Pie", description: "Minced lamb in a rich onion and herb gravy, topped with creamy mashed potato and baked until golden." }
          ]
        }
      ]
    },
    {
      id: "russia",
      name: "Russia",
      country: "Russia",
      center: [55.76, 37.62],
      size: "medium",
      flavorBases: [
        {
          name: "Dill-Sour Cream-Garlic",
          ingredients: ["dill_weed", "sour_cream", "garlic", "peppercorn", "horseradish"],
          description: "Russian cooking is defined by sour and earthy flavors: dill's fresh anise notes, the tang of sour cream, pungent horseradish, and garlic, suited to the harsh northern climate.",
          recipes: [
            { name: "Borscht", description: "A hearty beet soup simmered with cabbage, potatoes, and beef, served with a generous dollop of sour cream and fresh dill." },
            { name: "Pelmeni", description: "Small Siberian dumplings filled with seasoned minced meat, boiled and served with sour cream, vinegar, or butter." },
            { name: "Beef Stroganoff", description: "Tender strips of beef sauteed with mushrooms and onions in a rich sour cream and mustard sauce, served over egg noodles." }
          ]
        }
      ]
    },
    {
      id: "balkans",
      name: "Balkans",
      country: "Serbia/Bosnia",
      center: [44.79, 20.47],
      size: "small",
      flavorBases: [
        {
          name: "Smoked Paprika-Garlic-Onion",
          ingredients: ["smoked_paprika", "garlic", "onion", "peppercorn", "cream"],
          description: "Balkan cuisine features smoky grilled meats, roasted peppers, and hearty phyllo pastries, unified by smoked paprika, garlic, and slow-cooked onions.",
          recipes: [
            { name: "Cevapi", description: "Small grilled sausages of minced beef and lamb, served in flatbread with raw onion and kajmak cream cheese." },
            { name: "Ajvar", description: "A smoky, sweet relish of roasted red peppers and eggplant, slow-cooked with garlic and oil until thick and spreadable." },
            { name: "Burek", description: "Spirals of flaky phyllo pastry filled with seasoned minced meat, cheese, or spinach, baked until golden and crispy." }
          ]
        }
      ]
    },
    {
      id: "poland",
      name: "Poland",
      country: "Poland",
      center: [52.23, 21.01],
      size: "small",
      flavorBases: [
        {
          name: "Caraway-Dill-Sour Cream",
          ingredients: ["caraway", "dill_weed", "sour_cream", "horseradish", "onion"],
          description: "Polish cooking is rooted in earthy, comforting flavors: caraway seeds in breads and stews, dill in soups, sour cream on everything, and the sharp bite of fresh horseradish.",
          recipes: [
            { name: "Pierogi", description: "Plump dumplings filled with potato and cheese, sauerkraut, or meat, boiled then pan-fried in butter with onions." },
            { name: "Bigos", description: "Hunter's stew of sauerkraut and fresh cabbage slow-simmered with smoked sausage, pork, and dried mushrooms." },
            { name: "Zurek", description: "A tangy fermented rye soup with white sausage and hard-boiled egg, served in a hollowed bread bowl." }
          ]
        }
      ]
    },
    {
      id: "portugal",
      name: "Portugal",
      country: "Portugal",
      center: [38.72, -9.14],
      size: "small",
      flavorBases: [
        {
          name: "Garlic-Olive Oil-Piri Piri",
          ingredients: ["garlic", "olive_oil", "piri_piri", "coriander_seed", "onion"],
          description: "Portuguese cooking celebrates simple, bold flavors: abundant garlic and olive oil, the fiery kick of piri piri chili, and fresh coriander, applied to seafood and rustic stews.",
          recipes: [
            { name: "Bacalhau", description: "Salt cod prepared in countless ways, most classically baked with potatoes, onions, olives, and olive oil as Bacalhau a Bras." },
            { name: "Caldo Verde", description: "A simple, soul-warming soup of pureed potatoes, finely shredded kale, garlic, olive oil, and sliced chourico sausage." },
            { name: "Pasteis de Nata", description: "Flaky puff pastry tarts filled with a rich egg custard, blistered on top, and dusted with cinnamon and powdered sugar." }
          ]
        }
      ]
    },
    {
      id: "germany_austria",
      name: "Germany & Austria",
      country: "Germany/Austria",
      center: [48.14, 11.58],
      size: "medium",
      flavorBases: [
        {
          name: "Mustard-Caraway-Juniper",
          ingredients: ["mustard_seed", "caraway", "juniper", "peppercorn", "onion"],
          description: "Germanic cooking builds on robust, earthy flavors: sharp mustard, aromatic caraway, piney juniper berries, and black pepper, applied to hearty meats, sausages, and fermented cabbage.",
          recipes: [
            { name: "Schnitzel", description: "A thin cutlet of veal or pork, breaded and pan-fried in butter until golden, served with lemon and potato salad." },
            { name: "Bratwurst", description: "Finely seasoned pork sausages grilled or pan-fried, served with sauerkraut and sharp German mustard." },
            { name: "Sauerkraut", description: "Finely shredded cabbage fermented with salt, caraway, and juniper berries, braised slowly as a tangy accompaniment to meats." }
          ]
        }
      ]
    },

    // =========================================================================
    // AMERICAS
    // =========================================================================
    {
      id: "oaxaca",
      name: "Oaxaca",
      country: "Mexico",
      center: [17.07, -96.72],
      size: "medium",
      flavorBases: [
        {
          name: "Dried Chile-Chocolate-Cumin",
          ingredients: ["dried_chili", "chocolate", "cumin", "oregano", "garlic"],
          description: "Oaxaca is the land of seven moles, built on complex sauces of toasted dried chilies, chocolate, nuts, seeds, and warm spices, ground together into thick, velvety pastes.",
          recipes: [
            { name: "Mole Negro", description: "The most complex Oaxacan mole, a deeply dark sauce of charred chilies, chocolate, plantain, and dozens of spices, served over turkey or chicken." },
            { name: "Mole Coloradito", description: "A brick-red mole of ancho chilies, tomato, chocolate, and cinnamon, less smoky than negro but richly sweet-spicy." },
            { name: "Tlayudas", description: "Large, crispy tortillas spread with black bean paste and asiento (pork lard), topped with Oaxacan cheese, meat, and salsa." },
            { name: "Tamales Oaxaquenos", description: "Tamales wrapped in banana leaves filled with mole negro and chicken, steamed until tender." }
          ]
        }
      ]
    },
    {
      id: "yucatan",
      name: "Yucatan",
      country: "Mexico",
      center: [20.97, -89.62],
      size: "medium",
      flavorBases: [
        {
          name: "Achiote-Habanero-Sour Citrus",
          ingredients: ["achiote", "chili", "lime", "oregano", "garlic"],
          description: "Yucatecan cuisine is defined by recado rojo (achiote paste), the searing heat of habanero peppers, and the tang of sour orange, with Mayan and Spanish roots.",
          recipes: [
            { name: "Cochinita Pibil", description: "Pork marinated in achiote paste and sour orange, wrapped in banana leaves and slow-roasted in a pit oven until fork-tender." },
            { name: "Papadzules", description: "Corn tortillas dipped in a pumpkin seed sauce, filled with hard-boiled eggs, and topped with a tomato-habanero sauce." },
            { name: "Sopa de Lima", description: "A tangy chicken soup with fried tortilla strips, flavored with charred limes and local oregano." },
            { name: "Poc Chuc", description: "Thin slices of pork marinated in sour orange and grilled, served with pickled red onions and habanero salsa." }
          ]
        }
      ]
    },
    {
      id: "central_america",
      name: "Central America",
      country: "Guatemala/El Salvador",
      center: [14.63, -90.51],
      size: "small",
      flavorBases: [
        {
          name: "Tomato-Chili-Black Bean",
          ingredients: ["tomato", "chili", "black_beans", "cumin", "lime"],
          description: "Central American cooking is built on the ancient Mesoamerican triad of corn, beans, and squash, with tomato-chili salsas and lime providing bright, earthy flavors.",
          recipes: [
            { name: "Pupusas", description: "Thick corn masa cakes stuffed with cheese, refried beans, or pork chicharron, griddled and served with curtido slaw and tomato salsa." },
            { name: "Pepian", description: "Guatemala's national dish, a rich stew of chicken in a toasted pumpkin seed, sesame, and dried chili sauce thickened with roasted tomatoes." },
            { name: "Gallo Pinto", description: "Costa Rica and Nicaragua's beloved breakfast of rice and black beans fried together with onion, garlic, and cumin, served with eggs and tortillas." }
          ]
        }
      ]
    },
    {
      id: "veracruz",
      name: "Veracruz",
      country: "Mexico",
      center: [19.18, -96.14],
      size: "small",
      flavorBases: [
        {
          name: "Tomato-Olive Oil-Chili",
          ingredients: ["tomato", "olive_oil", "chili", "garlic", "oregano"],
          description: "Veracruz cuisine is Mexico's most Spanish-influenced regional kitchen, combining Old World olive oil, capers, and olives with local chilies, vanilla, and tropical ingredients.",
          recipes: [
            { name: "Huachinango a la Veracruzana", description: "Red snapper baked in a vibrant sauce of tomatoes, olives, capers, pickled jalapenos, and herbs, the signature dish of Veracruz." },
            { name: "Mole de Xico", description: "A complex, fruity mole from the town of Xico, made with mulato and ancho chilies, plantain, raisins, and chocolate." }
          ]
        }
      ]
    },
    {
      id: "peru",
      name: "Peru",
      country: "Peru",
      center: [-12.05, -77.04],
      size: "large",
      flavorBases: [
        {
          name: "Aji-Lime-Cilantro",
          ingredients: ["chili", "lime", "cilantro", "cumin", "garlic"],
          description: "Peruvian cooking revolves around native aji peppers (amarillo, panca, rocoto), fresh lime, and cilantro, with Andean, Spanish, and Asian influences creating unique fusion.",
          recipes: [
            { name: "Ceviche", description: "Fresh raw fish cured in lime juice with aji amarillo, red onion, and cilantro, served with sweet potato and toasted corn." },
            { name: "Lomo Saltado", description: "Stir-fried beef with tomatoes, onions, and aji amarillo, seasoned with soy sauce and vinegar, served with rice and fries." },
            { name: "Aji de Gallina", description: "Shredded chicken in a creamy sauce of aji amarillo, ground walnuts, bread, and Parmesan, served over rice." },
            { name: "Causa Limena", description: "Layers of seasoned mashed yellow potato with aji amarillo, lime, and fillings of chicken or tuna salad." }
          ]
        }
      ]
    },
    {
      id: "caribbean",
      name: "Caribbean (Jamaica)",
      country: "Jamaica",
      center: [18.11, -77.30],
      size: "medium",
      flavorBases: [
        {
          name: "Allspice-Scotch Bonnet-Thyme",
          ingredients: ["allspice", "chili", "thyme", "garlic", "ginger"],
          description: "Jamaican cooking is built on the aromatic warmth of allspice (pimento), the fierce heat of scotch bonnet peppers, and fresh thyme, often combined into jerk marinades.",
          recipes: [
            { name: "Jerk Chicken", description: "Chicken marinated in a fiery paste of scotch bonnet, allspice, thyme, garlic, and ginger, slow-smoked over pimento wood." },
            { name: "Curry Goat", description: "Goat meat stewed in a Jamaican curry of turmeric, allspice, scotch bonnet, and thyme, served with rice and peas." },
            { name: "Ackee and Saltfish", description: "Jamaica's national dish of sauteed salt cod with ackee fruit, scotch bonnet, tomatoes, and thyme." },
            { name: "Oxtail Stew", description: "Braised oxtail with broad beans, allspice, thyme, and scotch bonnet, cooked until fall-off-the-bone tender." }
          ]
        }
      ]
    },
    {
      id: "cajun_creole",
      name: "Cajun/Creole (Louisiana)",
      country: "United States",
      center: [29.95, -90.07],
      size: "medium",
      flavorBases: [
        {
          name: "Holy Trinity-Cayenne-Bay",
          ingredients: ["chili", "onion", "garlic", "thyme", "bay_leaf"],
          description: "Louisiana cooking starts with the 'holy trinity' of onion, celery, and bell pepper, layered with cayenne heat, garlic, and bay leaf, reflecting French, African, and Spanish roots.",
          recipes: [
            { name: "Gumbo", description: "A thick stew built on a dark roux with okra or file powder, sausage, seafood or chicken, and the holy trinity, served over rice." },
            { name: "Jambalaya", description: "A one-pot rice dish with andouille sausage, chicken, shrimp, and the holy trinity, seasoned with cayenne and thyme." },
            { name: "Crawfish Etouffee", description: "Crawfish tails smothered in a buttery, cayenne-spiced roux-based sauce with the trinity, served over white rice." },
            { name: "Red Beans and Rice", description: "Slow-simmered kidney beans with smoked sausage, ham hock, onion, garlic, and thyme, served over steamed rice." }
          ]
        }
      ]
    },
    {
      id: "tex_mex",
      name: "Tex-Mex",
      country: "United States",
      center: [29.42, -98.49],
      size: "medium",
      flavorBases: [
        {
          name: "Cumin-Chili-Garlic",
          ingredients: ["cumin", "chili", "garlic", "onion", "tomato"],
          description: "Tex-Mex cuisine is a bold fusion of Mexican and American Southern traditions, defined by heavy use of cumin, chili powder, melted cheese, and refried beans.",
          recipes: [
            { name: "Chili con Carne", description: "A thick, hearty stew of beef, chili peppers, cumin, garlic, and tomatoes, slow-simmered and served with cornbread or crackers." },
            { name: "Fajitas", description: "Sizzling strips of marinated beef or chicken grilled with peppers and onions, served with warm tortillas, guacamole, and sour cream." },
            { name: "Queso Dip", description: "A molten blend of melted cheese, roasted chili peppers, tomatoes, and spices, served with tortilla chips." }
          ]
        }
      ]
    },
    {
      id: "pacific_nw",
      name: "Pacific Northwest",
      country: "United States",
      center: [47.61, -122.33],
      size: "small",
      flavorBases: [
        {
          name: "Dill-Lemon-Soy-Ginger",
          ingredients: ["dill_weed", "lemon", "garlic", "soy_sauce", "ginger"],
          description: "Pacific Northwest cuisine celebrates pristine wild seafood and foraged ingredients, blending Native American smoking traditions with Asian-influenced flavors from the Pacific Rim.",
          recipes: [
            { name: "Cedar-Plank Salmon", description: "Wild salmon roasted on aromatic cedar planks, infusing the fish with a sweet, smoky flavor, served with dill and lemon." },
            { name: "Dungeness Crab", description: "Sweet, succulent Dungeness crab steamed whole and served with drawn butter, lemon, and garlic." },
            { name: "Teriyaki", description: "Seattle's signature teriyaki of grilled chicken glazed with a sweet soy-ginger-garlic sauce, served over rice with a salad." }
          ]
        }
      ]
    },
    {
      id: "new_england",
      name: "New England",
      country: "United States",
      center: [42.36, -71.06],
      size: "small",
      flavorBases: [
        {
          name: "Butter-Cream-Herb",
          ingredients: ["butter", "cream", "peppercorn", "onion", "thyme"],
          description: "New England cooking is rooted in the Atlantic seaboard's bounty, using rich dairy, simple herbs, and black pepper to complement fresh shellfish and hearty Yankee comfort food.",
          recipes: [
            { name: "Clam Chowder", description: "A thick, creamy soup of tender clams, potatoes, onion, and salt pork, enriched with cream and seasoned with thyme." },
            { name: "Lobster Roll", description: "Sweet chunks of fresh lobster meat tossed in warm butter or light mayo, served in a toasted split-top roll." },
            { name: "Baked Beans", description: "Navy beans slow-baked with molasses, salt pork, mustard, and onion in an earthenware crock, a Boston Saturday night tradition." }
          ]
        }
      ]
    },
    {
      id: "american_south",
      name: "American South",
      country: "United States",
      center: [35.23, -80.84],
      size: "medium",
      flavorBases: [
        {
          name: "Pepper-Garlic-Vinegar",
          ingredients: ["peppercorn", "garlic", "onion", "vinegar", "chili"],
          description: "Southern American cooking is built on slow smoking, deep frying, and braising, with vinegar-based sauces, black pepper, garlic, and onion providing bold, straightforward flavors.",
          recipes: [
            { name: "Pulled Pork BBQ", description: "Pork shoulder smoked low and slow over hickory or oak for hours, then pulled and dressed with tangy vinegar or tomato-based sauce." },
            { name: "Fried Chicken", description: "Chicken pieces marinated in buttermilk, dredged in seasoned flour, and deep-fried until shatteringly crispy and juicy inside." },
            { name: "Collard Greens", description: "Collard greens slow-simmered with smoked ham hock, onion, vinegar, and chili flakes until silky tender." }
          ]
        }
      ]
    },
    {
      id: "argentina",
      name: "Argentina",
      country: "Argentina",
      center: [-34.60, -58.38],
      size: "medium",
      flavorBases: [
        {
          name: "Chimichurri (Parsley-Oregano-Garlic-Vinegar)",
          ingredients: ["parsley", "oregano", "garlic", "chili", "vinegar"],
          description: "Argentine cuisine is centered on wood-fire grilling (asado) and the bright, herbaceous chimichurri sauce of parsley, oregano, garlic, and vinegar that accompanies it.",
          recipes: [
            { name: "Asado", description: "A ritual of various beef cuts, sausages, and offal slow-grilled over wood embers, served with chimichurri." },
            { name: "Empanadas", description: "Baked or fried pastries filled with spiced ground beef, olives, hard-boiled egg, and cumin, varying by region." },
            { name: "Provoleta", description: "A thick slice of provolone cheese grilled until bubbly and golden, topped with oregano and chili flakes." },
            { name: "Milanesa a la Napolitana", description: "Breaded and fried beef cutlet topped with tomato sauce, ham, and melted mozzarella." }
          ]
        }
      ]
    },
    {
      id: "brazil_bahia",
      name: "Bahia (Brazil)",
      country: "Brazil",
      center: [-12.97, -38.51],
      size: "medium",
      flavorBases: [
        {
          name: "Dende (Palm Oil)-Coconut-Chili-Lime",
          ingredients: ["palm_oil", "coconut", "chili", "lime", "garlic"],
          description: "Bahian cuisine is the heart of Afro-Brazilian cooking, built on dende (red palm oil), coconut milk, malagueta chilies, and lime, reflecting its West African heritage.",
          recipes: [
            { name: "Moqueca Baiana", description: "A vibrant seafood stew of fish, shrimp, or crab cooked in coconut milk and dende palm oil with tomatoes, peppers, and cilantro." },
            { name: "Acaraje", description: "Deep-fried black-eyed pea fritters split and filled with vatapa (shrimp paste), caruru (okra stew), and hot pepper sauce." },
            { name: "Vatapa", description: "A thick, creamy paste of bread, shrimp, coconut milk, palm oil, and ground peanuts and cashews." },
            { name: "Bobó de Camarao", description: "Shrimp in a puree of cassava, coconut milk, and palm oil, seasoned with ginger and chili." }
          ]
        }
      ]
    },
    {
      id: "colombia",
      name: "Colombia",
      country: "Colombia",
      center: [4.71, -74.07],
      size: "small",
      flavorBases: [
        {
          name: "Tomato-Onion-Cumin",
          ingredients: ["tomato", "onion", "garlic", "cumin", "coriander_seed"],
          description: "Colombian cooking is hearty and comforting, built on a sofrito of tomato, onion, and garlic called hogao, with cumin and coriander providing warmth to soups, stews, and grilled meats.",
          recipes: [
            { name: "Ajiaco", description: "A creamy chicken and potato soup from Bogota, made with three varieties of potato, corn, and the herb guascas, served with capers, cream, and avocado." },
            { name: "Bandeja Paisa", description: "Colombia's hearty platter of red beans, rice, ground beef, chicharron, fried egg, plantain, avocado, and arepa." },
            { name: "Arepas", description: "Griddled corn cakes split and stuffed with cheese, shredded meat, beans, or avocado, a daily staple across Colombia." }
          ]
        }
      ]
    },
    {
      id: "chile",
      name: "Chile",
      country: "Chile",
      center: [-33.45, -70.67],
      size: "small",
      flavorBases: [
        {
          name: "Chili-Cumin-Coriander",
          ingredients: ["chili", "cumin", "coriander_seed", "garlic", "onion"],
          description: "Chilean cooking is shaped by its long coastline and fertile valleys, using mild aji peppers, cumin, and fresh coriander in seafood stews, corn-based dishes, and empanadas.",
          recipes: [
            { name: "Pastel de Choclo", description: "A savory-sweet casserole of ground corn paste baked over a filling of seasoned beef, chicken, onion, olives, and hard-boiled egg." },
            { name: "Curanto", description: "A massive feast of shellfish, sausage, chicken, and potatoes cooked in a pit over heated stones, traditional to Chiloe Island." },
            { name: "Empanadas de Pino", description: "Baked pastries filled with a spiced beef mixture of onion, olives, raisins, and hard-boiled egg, seasoned with cumin." }
          ]
        }
      ]
    },
    {
      id: "venezuela",
      name: "Venezuela",
      country: "Venezuela",
      center: [10.49, -66.88],
      size: "small",
      flavorBases: [
        {
          name: "Garlic-Cumin-Onion",
          ingredients: ["garlic", "cumin", "onion", "chili", "plantain"],
          description: "Venezuelan cooking centers on corn-based arepas, slow-cooked shredded meats, and fried plantains, seasoned with a sofrito of garlic, cumin, and onion.",
          recipes: [
            { name: "Arepa", description: "Thick, griddled corn cakes split open and stuffed with shredded beef, black beans, cheese, or avocado, the heart of Venezuelan cuisine." },
            { name: "Pabellon Criollo", description: "Venezuela's national dish of shredded beef in a tomato-pepper sauce, served with black beans, white rice, and sweet fried plantains." },
            { name: "Hallaca", description: "A festive tamale of corn dough stuffed with a stew of beef, pork, and chicken with olives and capers, wrapped in banana leaves and steamed." }
          ]
        }
      ]
    }
  ]
};
