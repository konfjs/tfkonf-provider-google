import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecEgressPolicies {
  egress_from?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressFrom;
  egress_to?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPoliciesEgressTo;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressTo {
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecIngressPolicies {
  ingress_from?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressFrom;
  ingress_to?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPoliciesIngressTo;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpecVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}

export interface GoogleAccessContextManagerServicePerimeterArgsSpec {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies?: GoogleAccessContextManagerServicePerimeterArgsSpecEgressPolicies[];
  ingress_policies?: GoogleAccessContextManagerServicePerimeterArgsSpecIngressPolicies[];
  vpc_accessible_services?: GoogleAccessContextManagerServicePerimeterArgsSpecVpcAccessibleServices;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFromSources {
  access_level?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFrom {
  identities?: string[];
  identity_type?: string;
  source_restriction?: string;
  sources?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressTo {
  external_resources?: string[];
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusEgressPolicies {
  egress_from?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressFrom;
  egress_to?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPoliciesEgressTo;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFromSources {
  access_level?: string;
  resource?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFrom {
  identities?: string[];
  identity_type?: string;
  sources?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFromSources[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperationsMethodSelectors {
  method?: string;
  permission?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperations {
  service_name?: string;
  method_selectors?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperationsMethodSelectors[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressTo {
  resources?: string[];
  operations?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressToOperations[];
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusIngressPolicies {
  ingress_from?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressFrom;
  ingress_to?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPoliciesIngressTo;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatusVpcAccessibleServices {
  allowed_services?: string[];
  enable_restriction?: boolean;
}

export interface GoogleAccessContextManagerServicePerimeterArgsStatus {
  access_levels?: string[];
  resources?: string[];
  restricted_services?: string[];
  egress_policies?: GoogleAccessContextManagerServicePerimeterArgsStatusEgressPolicies[];
  ingress_policies?: GoogleAccessContextManagerServicePerimeterArgsStatusIngressPolicies[];
  vpc_accessible_services?: GoogleAccessContextManagerServicePerimeterArgsStatusVpcAccessibleServices;
}

export interface GoogleAccessContextManagerServicePerimeterArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleAccessContextManagerServicePerimeterArgs {
  description?: string;
  name: string;
  parent: string;
  perimeter_type?: string;
  title: string;
  use_explicit_dry_run_spec?: boolean;
  spec?: GoogleAccessContextManagerServicePerimeterArgsSpec;
  status?: GoogleAccessContextManagerServicePerimeterArgsStatus;
  timeouts?: GoogleAccessContextManagerServicePerimeterArgsTimeouts;
}

export class google_access_context_manager_service_perimeter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerServicePerimeterArgs) {
    const meta = {spec:{isBlock:true,egress_policies:{isBlock:true,egress_from:{isBlock:true,sources:{isBlock:true}},egress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}}},ingress_policies:{isBlock:true,ingress_from:{isBlock:true,sources:{isBlock:true}},ingress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}}},vpc_accessible_services:{isBlock:true}},status:{isBlock:true,egress_policies:{isBlock:true,egress_from:{isBlock:true,sources:{isBlock:true}},egress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}}},ingress_policies:{isBlock:true,ingress_from:{isBlock:true,sources:{isBlock:true}},ingress_to:{isBlock:true,operations:{isBlock:true,method_selectors:{isBlock:true}}}},vpc_accessible_services:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_service_perimeter", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get title(): string {
    return `${this.resourceType}.${this.resourceName}.title`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
