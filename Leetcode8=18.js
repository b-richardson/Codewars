// Flood Fill
var floodFill = function(image, sr, sc, newColor) {
    if(image == null || image.length < 1 || image[sr][sc] == newColor){
        return image;
    }
    const initCol = image[sr][sc];
    const fill = (image, r, c, newColor, initCol) => {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || initCol != image[r][c]){
            return;
        }
        image[r][c] = newColor;
        fill(image,r+1,c,newColor, initCol)
        fill(image,r-1,c,newColor, initCol)
        fill(image,r,c+1,newColor, initCol)
        fill(image,r,c-1,newColor, initCol)
    }
    fill (image,sr,sc,newColor,initCol);
    return image;
};