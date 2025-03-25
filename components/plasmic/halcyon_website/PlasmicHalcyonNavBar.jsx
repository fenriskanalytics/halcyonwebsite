// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: UDe2_-rIrkzi
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import AuthButton from "../../AuthButton"; // plasmic-import: tx8Yj7YTfIqS/component
import { useScreenVariants as useScreenVariantsqAyk5ZgNfB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: q_ayk5ZGNfB_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicHalcyonNavBar.module.css"; // plasmic-import: UDe2_-rIrkzi/css

createPlasmicElementProxy;

export const PlasmicHalcyonNavBar__VariantProps = new Array();

export const PlasmicHalcyonNavBar__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonNavBar__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqAyk5ZgNfB()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qwPou)}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ejgrl)}
        >
          <PlasmicLink__
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            className={classNames(projectcss.all, projectcss.a, sty.home)}
            component={Link}
            platform={"nextjs"}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"100%"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"165px"}
              loading={"lazy"}
              onClick={async event => {
                const $steps = {};
                $steps["goToHome"] = true
                  ? (() => {
                      const actionArgs = { destination: `/home` };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToHome"] != null &&
                  typeof $steps["goToHome"] === "object" &&
                  typeof $steps["goToHome"].then === "function"
                ) {
                  $steps["goToHome"] = await $steps["goToHome"];
                }
              }}
              src={{
                src: "/plasmic/halcyon_website/images/logoHalcyonWhiteSvg.svg",
                fullWidth: 300,
                fullHeight: 72,
                aspectRatio: 4.166667
              }}
            />
          </PlasmicLink__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ceppj)}
          >
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"membershipsLink"}
              data-plasmic-override={overrides.membershipsLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.membershipsLink
              )}
              component={Link}
              href={`/memberships`}
              platform={"nextjs"}
            >
              <div
                data-plasmic-name={"membershipsText"}
                data-plasmic-override={overrides.membershipsText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.membershipsText
                )}
              >
                {"Memberships"}
              </div>
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"scheduleLink"}
              data-plasmic-override={overrides.scheduleLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.scheduleLink
              )}
              component={Link}
              href={`/schedule`}
              platform={"nextjs"}
            >
              <div
                data-plasmic-name={"scheduleText"}
                data-plasmic-override={overrides.scheduleText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.scheduleText
                )}
              >
                {"Schedule"}
              </div>
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"privateslink"}
              data-plasmic-override={overrides.privateslink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.privateslink
              )}
              component={Link}
              platform={"nextjs"}
            >
              <div
                data-plasmic-name={"loginText"}
                data-plasmic-override={overrides.loginText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.loginText
                )}
              >
                {"Privates"}
              </div>
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"aboutUsLink"}
              data-plasmic-override={overrides.aboutUsLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.aboutUsLink
              )}
              component={Link}
              href={`/about-us`}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ytTf4
                )}
              >
                {"About Us"}
              </div>
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"contactLink"}
              data-plasmic-override={overrides.contactLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.contactLink
              )}
              component={Link}
              href={`/contact`}
              platform={"nextjs"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0ITok
                )}
              >
                {"Contact"}
              </div>
            </Stack__>
            <PlasmicLink__
              data-plasmic-name={"loginLink"}
              data-plasmic-override={overrides.loginLink}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.loginLink
              )}
              component={Link}
              href={`/account`}
              platform={"nextjs"}
            >
              <PlasmicLink__
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                platform={"nextjs"}
              >
                <AuthButton
                  data-plasmic-name={"authButton"}
                  data-plasmic-override={overrides.authButton}
                  className={classNames("__wab_instance", sty.authButton)}
                />
              </PlasmicLink__>
            </PlasmicLink__>
          </Stack__>
        </Stack__>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "home",
    "img",
    "membershipsLink",
    "membershipsText",
    "scheduleLink",
    "scheduleText",
    "privateslink",
    "loginText",
    "aboutUsLink",
    "contactLink",
    "loginLink",
    "link",
    "authButton"
  ],

  home: ["home", "img"],
  img: ["img"],
  membershipsLink: ["membershipsLink", "membershipsText"],
  membershipsText: ["membershipsText"],
  scheduleLink: ["scheduleLink", "scheduleText"],
  scheduleText: ["scheduleText"],
  privateslink: ["privateslink", "loginText"],
  loginText: ["loginText"],
  aboutUsLink: ["aboutUsLink"],
  contactLink: ["contactLink"],
  loginLink: ["loginLink", "link", "authButton"],
  link: ["link", "authButton"],
  authButton: ["authButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHalcyonNavBar__ArgProps,
          internalVariantPropNames: PlasmicHalcyonNavBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHalcyonNavBar";
  } else {
    func.displayName = `PlasmicHalcyonNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonNavBar = Object.assign(
  // Top-level PlasmicHalcyonNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    home: makeNodeComponent("home"),
    img: makeNodeComponent("img"),
    membershipsLink: makeNodeComponent("membershipsLink"),
    membershipsText: makeNodeComponent("membershipsText"),
    scheduleLink: makeNodeComponent("scheduleLink"),
    scheduleText: makeNodeComponent("scheduleText"),
    privateslink: makeNodeComponent("privateslink"),
    loginText: makeNodeComponent("loginText"),
    aboutUsLink: makeNodeComponent("aboutUsLink"),
    contactLink: makeNodeComponent("contactLink"),
    loginLink: makeNodeComponent("loginLink"),
    link: makeNodeComponent("link"),
    authButton: makeNodeComponent("authButton"),
    // Metadata about props expected for PlasmicHalcyonNavBar
    internalVariantProps: PlasmicHalcyonNavBar__VariantProps,
    internalArgProps: PlasmicHalcyonNavBar__ArgProps
  }
);

export default PlasmicHalcyonNavBar;
/* prettier-ignore-end */
