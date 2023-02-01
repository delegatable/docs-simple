import { Hero, Button, InlineLink } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import {
  AdjustmentsHorizontalIcon,
  ArchiveBoxXMarkIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  PencilSquareIcon,
  QueueListIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { isDarkTheme } = useColorMode();

  React.useEffect(() => {
    if (isDarkTheme) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDarkTheme]);

  function Header() {
    return (
      <Hero
        id="hero"
        className="bg-white"
        title={
          <div className="light:text-neutral-700 dark:text-white w-xl">
            <h1 className="font-bi text-5xl light:text-neutral-700 dark:text-white">
              Counterfactual Delegation
            </h1>
            <p className="text-sm font-normal md:text-base">
              Solidity framework for extending smart contracts <br />
              with counterfactual revocable-delegation
            </p>
          </div>
        }
        background="circles"
        cta={[
          <Button key="get-started" href={withBaseUrl('docs/why')}>
            Get started
          </Button>,
          <Button
            key="apply"
            href={withBaseUrl('/docs/counterfactual-delegation')}
            background="orange"
            color="white"
            className="apply-button"
          >
            Concepts
          </Button>,
        ]}
      />
    );
  }

  function Description() {
    return (
      <>
        {/* Showcase */}
        <div className="stats pb-4 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl leading-9 font-normal md:text-3xl md:leading-10">
                  Scale the Web of Trust with Capabilities
                </h2>
              </div>
            </div>
            <div className="pt-4 pb-12 md:pb-16">
              <div className="relative">
                <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg shadow-xl lg:grid lg:grid-cols-3 showcase">
                      <div className="flex flex-col border-b p-6 text-center lg:border-0 showcase-border">
                        <dt
                          className="order-2 mt-2 text-lg leading-6 font-medium text-description"
                          id="item-1"
                        >
                          Library
                        </dt>
                        <dd
                          className="order-1 text-5xl leading-none font-extrabold"
                          aria-describedby="item-1"
                        >
                          1
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          Caveat Enforcers
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold">
                          5+
                        </dd>
                      </div>
                      <div className="flex flex-col border-t p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          Of Opportunities
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold">
                          1,000's
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="pb-40 pt-4 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                Scalability. Security. Simplicity.
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-2xl leading-7 text-description">
                Access Controls for an Open Web3
              </p>
            </div>

            <div className="pt-16">
              <ul className="lg:grid lg:grid-cols-3 lg:col-gap-8 lg:row-gap-10">
                <li className="p-2">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <UserGroupIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-bold">
                        Counterfactual Delegation
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Delegate permissions to a third party without an
                        on-chain transaction.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0 p-2">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <CubeTransparentIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-bold">
                        Bounded Permissions
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Limit delegations by time, block, or any other on-chain
                        condition using shared enforcers.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0 p-2">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <BookOpenIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-bold">
                        Readable Code using EIP712
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Clearly express intent. And make it easy to verify the
                        code and side-effects.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="diagonal-box py-16 bg-gray-200 overflow-hidden">
          <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 md:text-5xl md:leading-10">
                  How it works
                </h2>
                <p className="mt-8 font-light max-w-2xl text-3xl leading-7 text-gray-500 lg:mx-auto">
                  Delegations | Revocations | Enforcers
                </p>
                {/* 
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  Delegatable is a Solidity framework for extending smart
                  contracts with counterfactual revocable-delegation.
                </p> */}
              </div>
            </div>

            <div className="py-16">
              <div className="max-w-xl mx-auto px-4 md:px-6 lg:max-w-screen-lg lg:px-8 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        className="h-200"
                        src={withBaseUrl('img/assets/off-chain-sign.svg')}
                        width="190px"
                        height="220px"
                        alt="Off-chain signatures"
                      />
                    </div>
                    <div className="mt-10 lg:mt-0 p-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Off-Chain Signatures
                      </h5>
                      <p className="mt-2 leading-6 text-sm text-gray-600">
                        Delegate smart contract permissions to friends, family,
                        and/or third-parties using a Capabilities based EVM
                        framework.
                      </p>
                      <button type="button" className="btn p-3 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/on-chain-revoke.svg')}
                        width="140px"
                        height="220px"
                        alt="On-chain revocations"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        On-Chain Revocations
                      </h5>
                      <p className="mt-2 leading-6 text-sm text-gray-600">
                        Revoke permissions at any time by submitting an on-chain
                        transaction that invalidates the original delegation.
                      </p>
                      <button type="button" className="btn p-3 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/composable-rules.svg')}
                        width="160px"
                        height="220px"
                        alt="Composable rules"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Composable Rules
                      </h5>
                      <p className="mt-2 leading-6 text-sm text-gray-600">
                        Use a library of{' '}
                        <span className="font-semibold">caveat-enforcers</span>{' '}
                        to create unique rules and conditions for delegations
                        can be executed.
                      </p>
                      <button type="button" className="btn p-3 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anatomy of DocSearch */}
        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                  Easy To Understand Access Controls
                </h4>
                <p className="mt-3 text-lg leading-7 text-description">
                  The Delegatable Framework uses the EIP712 standard to create a
                  human-readable and machine-verifiable signature.{' '}
                  <span className="font-semibold">
                    Limiting the risk of human error and malicious intent.
                  </span>
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="sparkles w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-xl leading-6 font-bold">
                          Human Readable |{' '}
                          <span className="font-light">Express Intent</span>
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          Users can more easily understand the permissions they
                          are granting to a third-party. Seeing important
                          information like the enforcer contract address, full
                          capabilities, side-effects, expiration dates and more.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="menu-alt2 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-xl leading-6 font-bold">
                          Machine Verifiable |{' '}
                          <span className="font-light">Reduce Risk</span>
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          Delegations, invocations and other transactions
                          metadata can be verified by any machine. This allows
                          for a more secure and reliable ecosystem. Providing
                          opportunities to education and inform users about the
                          risks of granting permissions.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center p-10">
                <img
                  className="relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(
                    `img/${isDarkTheme ? 'demo-enforcer' : 'demo-enforcer'}.png`
                  )}
                  alt="docsearch-modal"
                />
              </div>
            </div>

            <div className="relative mt-12 md:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h4 className="text-xl leading-8 font-extrabold tracking-tight md:text-2xl md:leading-9">
                    Layered Permissions + Chainable Signatures
                  </h4>
                  <p className="mt-3 text-base leading-7 text-description">
                    The Delegatable Framework uses the EIP712 standard to create
                    a human-readable and machine-verifiable signature.{' '}
                    <span className="font-semibold">
                      Limiting the risk of human error and malicious intent.
                    </span>
                  </p>
                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="lightning-bolt w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            Grant permissions to any Wallet.{' '}
                            <strong>Including Your own.</strong>
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            <span className="font-bold">
                              Stop using a single wallet for all your accounts.
                            </span>
                            The Delegatable Framework enables Users to start
                            using multiple wallets for different purposes, while
                            still inheriting authority from a root Wallet.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="arrows-expand w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            Peer-to-Peer Access Controls.{' '}
                            <strong>A Web of Trust.</strong>
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            Delegations can be re-delegated to other Wallets,
                            without permission from the root Wallet. Enabling a
                            new substrate of for a Web of Trust to emerge and
                            more fluid peer-to-peer access controls for digital
                            organizations.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 uil-ta-center">
                  <img
                    className="relative mx-auto"
                    width="490"
                    src={withBaseUrl(
                      `img/${
                        isDarkTheme
                          ? 'demo-delegatable-core'
                          : 'demo-delegatable-core'
                      }.png`
                    )}
                    alt="anatomy-of-docsearch"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Powered by Algolia */}
        <div className="py-16 bg-indigo-600 overflow-hidden lg:py-24">
          <div className="text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-6xl md:leading-10">
              Caveat Enforcers
            </h3>
            <p className="mt-4 max-w-3xl mx-auto text-center text-2xl leading-7 text-description text-white">
              Bounded Access Controls for any Delegated On-Chain Permission
            </p>
          </div>
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <ClockIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          Timestamp Range
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use the `block.timestamp` global variable to enforce
                          transaction execution periods; before, after, or
                          between two timestamps.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-white text-indigo-500">
                          <AdjustmentsHorizontalIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          Block Number Range
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use the `block.number` global variable to enforce
                          transaction execution periods; before, after, or
                          between two block numbers.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-white text-indigo-500">
                          <QueueListIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          Nonce/Transaction Limits
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use a transaction log to enforce the maximum number of
                          transactions per delegated address.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <ul className="mt-10">
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <BanknotesIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          ERC20 Allowances
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use the `allowance` function to enforce the maximum
                          amount of tokens that can be transferred from a
                          delegated address.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <ChartBarIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          Oracle Data
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Use on-chain oracles to determine if a delegated
                          permission can be executed. For example, if the price
                          of ETH is above $1000.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-indigo-500">
                          <WrenchScrewdriverIcon className="w-6 h-6 stroke-2" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-2xl font-semibold leading-6 text-white">
                          If You Can Think It, You Can Build It
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-300">
                          Write your own custom logic to enforce any permission
                          you can think of. And compose them together to create
                          complex permission systems.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="py-16 lg:py-24">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                <span className="font-normal">
                  Unlock Web3 at Human Scale with
                </span>
                <br /> Counterfactual Revocable Delegations
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-description lg:mx-auto">
                Explore the documentation to learn more about how to use
                <br />
                delegations, invocations, enforcers, revocations and more.
              </p>
            </div>

            <div className="pt-16 w-5/6 mx-auto">
              <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <UserGroupIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Delegations
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Authorize any address to execute transactions on your
                        Wallet's behalf. Enabling better private key management
                        strategies and generalized capabilities access controls.
                      </p>
                      <button type="button" className="btn p-2 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <ShieldCheckIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Enforcers
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Limit the scope and duration of delegations using shared
                        on-chain enforcers. Specifying conditions, like
                        timestamp and blockNumber ranges, at the transaction
                        signing level.
                      </p>
                      <button type="button" className="btn p-2 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <PencilSquareIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Invocations
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Delegations can be invoked by any address, including
                        other contracts. And custom transaction queues can be
                        set, which means nonces are no longer a blocker.
                      </p>
                      <button type="button" className="btn p-2 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </li>
                <li className="mt-10 md:mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <ArchiveBoxXMarkIcon className="w-6 h-6 stroke-2" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        Revocations
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        Delegations can be revoked at any time, using an
                        on-chain revocation registry. This allows for granular,
                        per-delegation, per-enforcer, per-invocation revocation.
                      </p>
                      <button type="button" className="btn p-2 rounded-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="tailwind">
      <Header />
      <Description />
    </div>
  );
}

export default Home;
