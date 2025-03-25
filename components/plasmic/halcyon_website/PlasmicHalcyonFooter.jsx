// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: WgtcOX7lLlZ3
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
  ensureGlobalVariants,
  generateStateOnChangeProp,
  generateStateValueProp,
  get as $stateGet,
  set as $stateSet,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal";
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { useScreenVariants as useScreenVariantsqAyk5ZgNfB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: q_ayk5ZGNfB_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicHalcyonFooter.module.css"; // plasmic-import: WgtcOX7lLlZ3/css
import Instagram1SvgrepoComSvgIcon from "./icons/PlasmicIcon__Instagram1SvgrepoComSvg"; // plasmic-import: HvHYiYVE64hp/icon
import TiktokLogoLogoSvgrepoComSvgIcon from "./icons/PlasmicIcon__TiktokLogoLogoSvgrepoComSvg"; // plasmic-import: KfGPUyuU1GIA/icon
import PinterestSvgrepoComSvg2Icon from "./icons/PlasmicIcon__PinterestSvgrepoComSvg2"; // plasmic-import: RxN6QMK2WuQ4/icon
import LogoSvgIcon from "./icons/PlasmicIcon__LogoSvg"; // plasmic-import: 54DQJ6tyhv9Y/icon

createPlasmicElementProxy;

export const PlasmicHalcyonFooter__VariantProps = new Array();

export const PlasmicHalcyonFooter__ArgProps = new Array("footerLinks3");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHalcyonFooter__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          footerLinks3: false
        },
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqAyk5ZgNfB()
  });
  return (
    <div
      data-plasmic-name={"footerTop"}
      data-plasmic-override={overrides.footerTop}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footerTop
      )}
    >
      <div
        data-plasmic-name={"container"}
        data-plasmic-override={overrides.container}
        className={classNames(projectcss.all, sty.container)}
      >
        <div className={classNames(projectcss.all, sty.columns__uC1A)}>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__a0XcF)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__yFdn
              )}
            >
              {"Halcyon Studios"}
            </div>
            <AntdButton
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              onClick={async () => {
                const $steps = {};
                $steps["updateModalOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["modal", "open"]
                        },
                        operation: 4
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;
                        const oldValue = $stateGet(objRoot, variablePath);
                        $stateSet(objRoot, variablePath, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateModalOpen"] != null &&
                  typeof $steps["updateModalOpen"] === "object" &&
                  typeof $steps["updateModalOpen"].then === "function"
                ) {
                  $steps["updateModalOpen"] = await $steps["updateModalOpen"];
                }
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aPzDy
                )}
              >
                {"2305 W Morrison Ave\nTampa, FL 33609"}
              </div>
            </AntdButton>
            <div className={classNames(projectcss.all, sty.freeBox__mJ5)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h5GKs
                )}
              >
                {"EMAIL"}
              </div>
              <div
                data-plasmic-name={"emailAddressText"}
                data-plasmic-override={overrides.emailAddressText}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.emailAddressText
                )}
              >
                {"Info@HalcyonStudio.us"}
              </div>
              <AntdModal
                data-plasmic-name={"modal"}
                data-plasmic-override={overrides.modal}
                className={classNames("__wab_instance", sty.modal)}
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens
                )}
                modalScopeClassName={sty["modal__modal"]}
                onOpenChange={async (...eventArgs) => {
                  generateStateOnChangeProp($state, ["modal", "open"]).apply(
                    null,
                    eventArgs
                  );
                }}
                open={generateStateValueProp($state, ["modal", "open"])}
                title={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xmtFn
                    )}
                  >
                    {"Halcyon Studios"}
                  </div>
                }
                trigger={null}
                width={"650"}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qjxGl)}>
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.9592825997906!2d-82.48591732531897!3d27.933893476053484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c30f3960f8cf%3A0x2bebf5a2a4db0690!2sHalcyon%20Studio!5e0!3m2!1sen!2sus!4v1713144134165!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                    }
                  />
                </div>
              </AntdModal>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jFkXy
              )}
            >
              {"FOLLOW US"}
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__igy4E)}
            >
              <Instagram1SvgrepoComSvgIcon
                data-plasmic-name={"instagramIcon"}
                data-plasmic-override={overrides.instagramIcon}
                className={classNames(projectcss.all, sty.instagramIcon)}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] = true
                    ? (() => {
                        const actionArgs = {
                          destination:
                            "https://www.instagram.com/halcyonstudiosus/"
                        };
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
                    $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] !=
                      null &&
                    typeof $steps[
                      "goToHttpsWwwInstagramComHalcyonstudiosus"
                    ] === "object" &&
                    typeof $steps["goToHttpsWwwInstagramComHalcyonstudiosus"]
                      .then === "function"
                  ) {
                    $steps["goToHttpsWwwInstagramComHalcyonstudiosus"] =
                      await $steps["goToHttpsWwwInstagramComHalcyonstudiosus"];
                  }
                }}
                role={"img"}
              />

              <TiktokLogoLogoSvgrepoComSvgIcon
                data-plasmic-name={"pinterestIcon2"}
                data-plasmic-override={overrides.pinterestIcon2}
                className={classNames(projectcss.all, sty.pinterestIcon2)}
                role={"img"}
              />

              <PinterestSvgrepoComSvg2Icon
                data-plasmic-name={"pinterestIcon"}
                data-plasmic-override={overrides.pinterestIcon}
                className={classNames(projectcss.all, sty.pinterestIcon)}
                role={"img"}
              />

              <LogoSvgIcon
                data-plasmic-name={"twitterIcon"}
                data-plasmic-override={overrides.twitterIcon}
                className={classNames(projectcss.all, sty.twitterIcon)}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToPage"] = true
                    ? (() => {
                        const actionArgs = {};
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
                    $steps["goToPage"] != null &&
                    typeof $steps["goToPage"] === "object" &&
                    typeof $steps["goToPage"].then === "function"
                  ) {
                    $steps["goToPage"] = await $steps["goToPage"];
                  }
                }}
                role={"img"}
              />
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.column__qxxG4)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kBnWi
              )}
            >
              {"Menu"}
            </div>
            <PlasmicLink__
              data-plasmic-name={"homePage"}
              data-plasmic-override={overrides.homePage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.homePage
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Home"}
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"membershipsPage"}
              data-plasmic-override={overrides.membershipsPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.membershipsPage
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Memberships"}
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"privatesPage"}
              data-plasmic-override={overrides.privatesPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.privatesPage
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Privates"}
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"aboutUsPage"}
              data-plasmic-override={overrides.aboutUsPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.aboutUsPage
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"About Us"}
            </PlasmicLink__>
            <PlasmicLink__
              data-plasmic-name={"contactPage"}
              data-plasmic-override={overrides.contactPage}
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.contactPage
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Contact"}
            </PlasmicLink__>
            <div className={classNames(projectcss.all, sty.freeBox__xdPun)}>
              <PlasmicLink__
                data-plasmic-name={"privacyPolicyPage"}
                data-plasmic-override={overrides.privacyPolicyPage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.privacyPolicyPage
                )}
                component={Link}
                platform={"nextjs"}
                tabIndex={1}
                target={"_blank"}
              >
                {"Privacy Policy "}
              </PlasmicLink__>
              <PlasmicLink__
                data-plasmic-name={"termsOfServicePage"}
                data-plasmic-override={overrides.termsOfServicePage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.termsOfServicePage
                )}
                component={Link}
                platform={"nextjs"}
                tabIndex={2}
                target={"_blank"}
              >
                {"Terms of Service "}
              </PlasmicLink__>
              <PlasmicLink__
                data-plasmic-name={"cookiesPolicyPage"}
                data-plasmic-override={overrides.cookiesPolicyPage}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.cookiesPolicyPage
                )}
                component={Link}
                platform={"nextjs"}
                tabIndex={3}
                target={"_blank"}
              >
                {"Cookies Policy"}
              </PlasmicLink__>
            </div>
          </Stack__>
          <div className={classNames(projectcss.all, sty.column__oh6Bc)}>
            <h5
              data-plasmic-name={"h5"}
              data-plasmic-override={overrides.h5}
              className={classNames(
                projectcss.all,
                projectcss.h5,
                projectcss.__wab_text,
                sty.h5
              )}
            >
              {"Gallery"}
            </h5>
            <div className={classNames(projectcss.all, sty.columns__rpJzJ)}>
              <div className={classNames(projectcss.all, sty.column__mmaqc)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__olwDc)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/halcyonAngleViewJpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__qvKh)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__yQagK)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/halcyonZoomedAngleViewJpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.columns___8JNkK)}>
              <div className={classNames(projectcss.all, sty.column__ohOVz)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__qlnwt)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/_28Jpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__w7Dk)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__vHrY6)}
                  displayHeight={"80px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/halcyon_website/images/_24Jpg.jpg",
                    fullWidth: 3840,
                    fullHeight: 2160,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  footerTop: [
    "footerTop",
    "container",
    "button",
    "emailAddressText",
    "modal",
    "embedHtml",
    "instagramIcon",
    "pinterestIcon2",
    "pinterestIcon",
    "twitterIcon",
    "homePage",
    "membershipsPage",
    "privatesPage",
    "aboutUsPage",
    "contactPage",
    "privacyPolicyPage",
    "termsOfServicePage",
    "cookiesPolicyPage",
    "h5"
  ],

  container: [
    "container",
    "button",
    "emailAddressText",
    "modal",
    "embedHtml",
    "instagramIcon",
    "pinterestIcon2",
    "pinterestIcon",
    "twitterIcon",
    "homePage",
    "membershipsPage",
    "privatesPage",
    "aboutUsPage",
    "contactPage",
    "privacyPolicyPage",
    "termsOfServicePage",
    "cookiesPolicyPage",
    "h5"
  ],

  button: ["button"],
  emailAddressText: ["emailAddressText"],
  modal: ["modal", "embedHtml"],
  embedHtml: ["embedHtml"],
  instagramIcon: ["instagramIcon"],
  pinterestIcon2: ["pinterestIcon2"],
  pinterestIcon: ["pinterestIcon"],
  twitterIcon: ["twitterIcon"],
  homePage: ["homePage"],
  membershipsPage: ["membershipsPage"],
  privatesPage: ["privatesPage"],
  aboutUsPage: ["aboutUsPage"],
  contactPage: ["contactPage"],
  privacyPolicyPage: ["privacyPolicyPage"],
  termsOfServicePage: ["termsOfServicePage"],
  cookiesPolicyPage: ["cookiesPolicyPage"],
  h5: ["h5"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHalcyonFooter__ArgProps,
          internalVariantPropNames: PlasmicHalcyonFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHalcyonFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footerTop") {
    func.displayName = "PlasmicHalcyonFooter";
  } else {
    func.displayName = `PlasmicHalcyonFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicHalcyonFooter = Object.assign(
  // Top-level PlasmicHalcyonFooter renders the root element
  makeNodeComponent("footerTop"),
  {
    // Helper components rendering sub-elements
    container: makeNodeComponent("container"),
    button: makeNodeComponent("button"),
    emailAddressText: makeNodeComponent("emailAddressText"),
    modal: makeNodeComponent("modal"),
    embedHtml: makeNodeComponent("embedHtml"),
    instagramIcon: makeNodeComponent("instagramIcon"),
    pinterestIcon2: makeNodeComponent("pinterestIcon2"),
    pinterestIcon: makeNodeComponent("pinterestIcon"),
    twitterIcon: makeNodeComponent("twitterIcon"),
    homePage: makeNodeComponent("homePage"),
    membershipsPage: makeNodeComponent("membershipsPage"),
    privatesPage: makeNodeComponent("privatesPage"),
    aboutUsPage: makeNodeComponent("aboutUsPage"),
    contactPage: makeNodeComponent("contactPage"),
    privacyPolicyPage: makeNodeComponent("privacyPolicyPage"),
    termsOfServicePage: makeNodeComponent("termsOfServicePage"),
    cookiesPolicyPage: makeNodeComponent("cookiesPolicyPage"),
    h5: makeNodeComponent("h5"),
    // Metadata about props expected for PlasmicHalcyonFooter
    internalVariantProps: PlasmicHalcyonFooter__VariantProps,
    internalArgProps: PlasmicHalcyonFooter__ArgProps
  }
);

export default PlasmicHalcyonFooter;
/* prettier-ignore-end */
