import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo {
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterIngressPolicyArgs {
  perimeter: string;
  ingress_from?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressFrom;
  ingress_to?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsIngressTo;
  timeouts?: GoogleAccessContextManagerServicePerimeterIngressPolicyArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_ingress_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterIngressPolicyArgs) {
    const meta = {ingress_from:{isBlock:true,sources:{isBlock:true}},ingress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_ingress_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get perimeter(): string {
    return `${this.resourceType}.${this.resourceName}.perimeter`;
  }
}
