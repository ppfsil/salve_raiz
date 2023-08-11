import Postagem from '../../../models/Postagem';

interface FeedProps {
  post: Postagem;
}

function Trending({ post }: FeedProps) {
  return (

    <div className="flex flex-col flex-shrink-0 w-3/4 py-4 pl-4">
                  <input
                    className="flex items-center h-8 px-2 border border-gray-500 rounded-sm"
                    type="search"
                    placeholder="Search…"
                  />
                  <div>
                    <h3 className="mt-6 font-semibold">Serviços</h3>
                    <div className="flex w-full py-4 border-b border-gray-300">
                      <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"><img src={post.usuario?.foto} alt="" /></span>
                      <div className="flex flex-col flex-grow ml-2">
                        <div className="flex text-sm">
                          <span className="font-semibold">{post.usuario?.nome}</span>
                        </div>
                        <p className="mt-1 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, et dolore magna aliqua.{' '}
                          <a className="underline" href="#">
                            #hashtag
                          </a>
                        </p>
                      </div>
                    </div>
                    </div>
                    </div>

    );
}

export default Trending;