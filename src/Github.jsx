import { useEffect, useState } from 'react'

export default function Github() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepos] = useState(1);
  const [perPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://api.github.com/users/IniomohAngela/repos'
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url)
      const data = await res.json();
      setRepos(data.results)
      console.log(data)
      setIsLoading(false);

    };
    fetchUsers();

  }, []);

}

