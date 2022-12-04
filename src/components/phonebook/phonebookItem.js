import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <div key={id}>
      <div>
        {name}: {number}
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
