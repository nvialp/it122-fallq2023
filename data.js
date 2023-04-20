let rovers = [
    {"name": "Sojourner", "landed": "July 1997", "speed": "0.03 kph ", "mass": "10 kg", "tools": "2"},
    {"name": "Spirit", "landed": "January 2004", "speed": "0.16 kph ", "mass": "169 kg", "tools": "5"},
    {"name": "Spirit", "landed": "January 2004", "speed": "0.16 kph ", "mass": "169 kg", "tools": "5"},
    {"name": "Curiosity", "landed": "August 2012", "speed": "0.14 kph ", "mass": "899 kg", "tools": "10"},
    {"name": "Perseverance", "landed": "February 2021", "speed": "0.14 kph ", "mass": "1025 kg", "tools": "7"}
]

const getAll = () => {
    return rovers;
}

const getItem = (name) => {
    return rovers.name;
}

export { getItem };
export { getAll };