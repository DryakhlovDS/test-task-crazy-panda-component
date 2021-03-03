import "./pagination.scss";

function PaginationPanda({ pages, curPage, toggle }) {
  let paginationsArray = [];
  for (let i = 1; i <= pages; i++) {
    paginationsArray.push(i);
  }
  const paginationItems = paginationsArray.map((num, index) => {
    const style = num === curPage ? "active" : "";
    return (
      <button onClick={(e) => changePage(num, e)} className={style} key={index}>
        {num}
      </button>
    );
  });

  function changePage(value, event) {
    const allPages = document.querySelectorAll(".pagination-panda button");
    allPages.forEach((el) => el.classList.remove("active"));
    event.target.classList.add("active");
    toggle(value);
  }
  return <div className='pagination-panda'>{paginationItems}</div>;
}

export default PaginationPanda;
