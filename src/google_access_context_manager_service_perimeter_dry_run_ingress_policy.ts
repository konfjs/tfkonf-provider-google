import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo {
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs {
  perimeter: string;
  ingress_from?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressFrom;
  ingress_to?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsIngressTo;
  timeouts?: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_dry_run_ingress_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyArgs) {
    const meta = {ingress_from:{isBlock:true,sources:{isBlock:true}},ingress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_dry_run_ingress_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get perimeter(): string {
    return `${this.resourceType}.${this.resourceName}.perimeter`;
  }
}
