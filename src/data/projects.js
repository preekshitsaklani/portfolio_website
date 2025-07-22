// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Text Generation using GPT-2 (Fine-Tuning)",
    codeSnippet: `trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_dataset,
    eval_dataset=valid_dataset,
    data_collator=data_collator,
)`,
    tags: [
      "transformers",
      "torch",
      "GPT-2",
      "nltk",
      "tokenizers",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1eIo5yrRLdZbijnHsfViD8xfiAlSn-U7Y?usp=sharing",
    description: "Fine-tuned GPT-2 model for custom text generation with HuggingFace transformers"
  },
  {
    id: 2,
    title: "Diabetes Prediction System",
    codeSnippet: `models = {
    "Random Forest": RandomForestClassifier(random_state=42),
    "SVM": SVC(probability=True, random_state=42),
    "Logistic Regression": LogisticRegression(random_state=42)
}`,
    tags: [
      "pandas",
      "numpy",
      "matplotlib",
      "seaborn",
      "scikit-learn",
      "Random Forest",
      "SVM",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1Vdsa_TlkXp4oaKsWrleMq3X0cCgzFk93?usp=sharing",
    description: "Machine learning system for diabetes prediction using multiple classification algorithms"
  },
  {
    id: 3,
    title: "Medical Image Classification",
    codeSnippet: `history = model.fit(
    train_generator,
    epochs=10,
    validation_data=val_generator,
    callbacks=[tensorboard_callback]
)`,
    tags: [
      "tensorflow",
      "keras",
      "CNNs",
      "OpenCV",
      "PIL",
      "TensorBoard",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1Eb3eaewjddjubm-mJhxEkdxRCbg898wA?usp=sharing",
    description: "Deep learning model for medical image classification using convolutional neural networks"
  },
  {
    id: 4,
    title: "Airline Tweet Sentiment Analysis",
    codeSnippet: `model = LogisticRegression(max_iter=1000)
model.fit(X_train_tfidf, y_train)
y_pred = model.predict(X_test_tfidf)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:\\n", classification_report(y_test, y_pred))`,
    tags: [
      "pandas",
      "numpy",
      "NLTK",
      "spaCy",
      "TextBlob",
      "TF-IDF",
      "Logistic Regression",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1-O0dN7VtL63sfgoM0JoWBB0fvYHm5n-G?usp=sharing",
    description: "Natural language processing model for analyzing sentiment in airline customer tweets"
  },

  
  {
    id: 5,
    title: "Breast Cancer Detection Using SVM",
    codeSnippet: `hyper_Param = {
    'C': [1, 0.1, 0.01, 0.001],
    'kernel': ['rbf', 'linear', 'poly', 'sigmoid'],
    'degree': [1, 2, 3, 4, 5]
}`,
    tags: [
      "numpy",
      "pandas",
      "sklearn",
      "SVM",
      "GridSearchCV",
      "matplotlib",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1h6gAnNX2EEoHnX9RNgdAaRAkP-9lkgEA?usp=sharing",
    description: "Support Vector Machine model for breast cancer detection with hyperparameter optimization"
  },
  {
    id: 6,
    title: "CNN MNIST Classification",
    codeSnippet: `model = Sequential([
    keras.Input(shape = img_shape),
    keras.layers.Conv2D(20, kernel_size = (5, 5), strides = (2, 2), padding = 'valid', activation = 'relu'),
    keras.layers.Conv2D(40, kernel_size = (5, 5), strides = (2, 2), padding = 'valid', activation = 'relu'),
    keras.layers.Conv2D(80, kernel_size = (3, 3), strides = (2, 2), padding = 'valid', activation = 'relu'),
    keras.layers.Flatten(),
    keras.layers.Dense(500, activation = 'relu'),
    keras.layers.Dense(10, activation = 'softmax'),
])`,
    tags: [
      "keras",
      "Conv2D",
      "CNNs",
      "ReLU",
      "Softmax",
      "MNIST",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1Zxn2FAw9xWVLqbcVViUxMZphm1dnzyJ6?usp=sharing",
    description: "Convolutional Neural Network for improved MNIST digit classification performance"
  },
  {
    id: 7,
    title: "ANN MNIST Digit Recognition",
    codeSnippet: `model = Sequential(name = 'ANN_MNIST')
model.add(keras.layers.Flatten())
model.add(Dense(700, activation='relu', name='First_layer'))
model.add(Dense(500, activation='relu',name='Second_layer'))
model.add(Dense(250, activation='relu',name='third_layer'))
model.add(Dense(125, activation='relu',name='Fourth_layer'))
model.add(Dense(10, activation='softmax',name='tenth_layer'))`,
    tags: [
      "keras",
      "Sequential",
      "Dense layers",
      "ReLU",
      "Softmax",
      "MNIST",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1lqPqRfz2oz2FmW6LDFvDE1DczCFPCvSI?usp=sharing",
    description: "Artificial Neural Network for handwritten digit recognition using the MNIST dataset"
  },
  {
    id: 8,
    title: "Boston Housing Price Prediction",
    codeSnippet: `def gradient(X,Y,theta):
    m,n = X.shape
    grad= np.zeros((n,))
    for j in range(n):
        for i in range(m):
            x=X[i]
            y_p=hypothesis(X[i],theta)
            y_t=Y[i]
            grad[j]+= (y_p-y_t)*x[j]
    return grad/m`,
    tags: [
      "numpy",
      "pandas",
      "matplotlib",
      "gradient descent",
      "linear regression",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1XAQZHjMSs9EwKqwlhZhYeRz42CHRBD07?usp=sharing",
    description: "Linear regression model for housing price prediction using gradient descent optimization"
  },
  {
    id: 9,
    title: "Mushroom Classification - Naive Bayes",
    codeSnippet: `def likelihood_prob(X_train, Y_train, feat_col, value, label):
    X_train = X_train[Y_train == label]
    numerator = np.sum(X_train[:, feat_col] == value)
    denominator = np.sum(Y_train == label)
    return numerator / denominator`,
    tags: [
      "numpy",
      "pandas",
      "sklearn",
      "Naive Bayes",
      "probability",
      "matplotlib",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1o77NaYv0O24HIVvaA0H862AxykZZP5Wz?usp=sharing",
    description: "Naive Bayes classifier for mushroom edibility prediction using probabilistic approach"
  },
  {
    id: 10,
    title: "Titanic Survival - Decision Trees",
    codeSnippet: `for i in range(test_X.shape[0]):
    output=dt.predict(test_X.loc[i])
    if output == 'Survived':
        pred.append(1)
    else:
        pred.append(0)`,
    tags: [
      "numpy",
      "pandas",
      "Decision Trees",
      "entropy",
      "information gain",
      "matplotlib",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/1EmMA7XRmGpNp_n3ww0irqqZj7PSXUI4p?usp=sharing",
    description: "Decision tree classifier for predicting Titanic passenger survival rates"
  },
  {
    id: 11,
    title: "Titanic Survival - Logistic Regression",
    codeSnippet: `def loss_func(X, weights, Y):
    Y_pred = hypothesis(X, weights)
    loss = np.mean(Y * np.log(Y_pred) + (1 - Y) * np.log(1 - Y_pred))
    return -1 * loss`,
    tags: [
      "numpy",
      "pandas",
      "Logistic Regression",
      "hypothesis",
      "loss function",
      "gradient descent",
      "matplotlib",
      "Google Colab"
    ],
    colabLink: "https://colab.research.google.com/drive/19n31d4ntG1YJaq-KeJAzWn7F_GhI5L2G?usp=sharing",
    description: "Logistic regression implementation for Titanic survival prediction from scratch"
  }
];