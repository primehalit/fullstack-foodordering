import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdShoppingCart } from "react-icons/md";

const styles = {
  campaignsContainer: {
    display: 'flex',
    gap: '20px',
  },
  campaignItem: {
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  imageContainer: {
    borderBottom: '1px solid #eee',
  },
  content: {
    padding: '10px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  discount: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  orderButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  orderButtonHover: {
    backgroundColor: '#0056b3',
  }
};

const CampaignItem = ({ title, discount, imageSrc }) => {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push('/campaigns'); // Yönlendirmek istediğiniz sayfanın yolunu yazın
  };

  return (
    <div style={styles.campaignItem}>
      <div style={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          width={150}
          height={150}
          objectFit="cover"
          priority
        />
      </div>
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.discount}>{discount} Off</p>
        <button style={styles.orderButton} onClick={handleOrderClick}>
          Şimdi Sipariş et... <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div style={styles.campaignsContainer}>
      <CampaignItem
        title="Yaz İndirimleri"
        discount="2%"
        imageSrc="/images/si2.jpeg"
        priority
      />
      <CampaignItem
        title="Yaz İndirimleri"
        discount="20%"
        imageSrc="/images/si2.jpeg"
        priority
      />
      <CampaignItem
        title="Yaz İndirimleri"
        discount="10%"
        imageSrc="/images/si2.jpeg"
        priority
      />
    </div>
  );
};

export default Campaigns;


