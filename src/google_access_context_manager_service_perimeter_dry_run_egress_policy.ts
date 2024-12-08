import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs {
  perimeter: string;
  egress_from?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressFrom;
  egress_to?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsEgressTo;
  timeouts?: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgsTimeouts;
}

export class google_access_context_manager_service_perimeter_dry_run_egress_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyArgs) {
    const meta = {egress_from:{isBlock:true,sources:{isBlock:true}},egress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter_dry_run_egress_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get perimeter(): string {
    return `${this.resourceType}.${this.resourceName}.perimeter`;
  }
}
