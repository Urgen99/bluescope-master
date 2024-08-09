/* eslint-disable @next/next/no-img-element */
type Props = {
  images?: File[];
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
};
const ImagePreview = ({ images }: Props) => {
  return (
    <div className="px-8 w-[100%] overflow-y-scroll">
      <div className="grid grid-cols-12 gap-2 my-2">
        {images ? (
          images.map((image, index) => (
            <div className="relative aspect-video col-span-4" key={image.name}>
              <img
                src={URL.createObjectURL(image)}
                alt={image.name}
                key={index}
                className="object-fill"
                style={styles.image}
              />
            </div>
          ))
        ) : (
          <div className="border-2 !h-[10rem] w-[80vw] md:w-[50vw]">
            <img
              src="/images/upload.png"
              style={styles.image}
              className="object-contain h-[100%] w-[100%]"
              alt="Thumb"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
