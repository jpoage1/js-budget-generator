export default function isObject(x) {
    return typeof x == 'object' && !Array.isArray(x);
};