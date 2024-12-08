import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterEgressPolicyArgs {
  perimeter: string;
  egress_from?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressFrom;
  egress_to?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsEgressTo;
  timeouts?: GoogleAccessContextManagerServicePerimeterEgressPolicyArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_egress_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterEgressPolicyArgs) {
    const meta = {egress_from:{isBlock:true,sources:{isBlock:true}},egress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_egress_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get perimeter(): string {
    return `${this.resourceType}.${this.resourceName}.perimeter`;
  }
}
