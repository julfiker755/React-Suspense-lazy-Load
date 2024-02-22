import wrapPromise from "../utils/Warpromise";

export default function fetchPosts(url) {
    const response = fetch(url).then((res) => res.json());
    return wrapPromise(response)
}