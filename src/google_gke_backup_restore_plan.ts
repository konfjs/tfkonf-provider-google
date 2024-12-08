import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScope {
  all_group_kinds?: boolean;
  no_group_kinds?: boolean;
  excluded_group_kinds?: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds[];
  selected_group_kinds?: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigExcludedNamespaces {
  namespaces: string[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesRequiring {
  resource_group?: string;
  resource_kind?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesSatisfying {
  resource_group?: string;
  resource_kind?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependencies {
  requiring: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesRequiring;
  satisfying: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependenciesSatisfying;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrder {
  group_kind_dependencies: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrderGroupKindDependencies[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplicationsNamespacedNames {
  name: string;
  namespace: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplications {
  namespaced_names: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplicationsNamespacedNames[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedNamespaces {
  namespaces: string[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesFieldActions {
  from_path?: string;
  op: string;
  path?: string;
  value?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilterGroupKinds {
  resource_group?: string;
  resource_kind?: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilter {
  json_path?: string;
  namespaces?: string[];
  group_kinds?: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilterGroupKinds[];
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRules {
  description?: string;
  field_actions: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesFieldActions[];
  resource_filter?: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRulesResourceFilter;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfigVolumeDataRestorePolicyBindings {
  policy: string;
  volume_type: string;
}

export interface GoogleGkeBackupRestorePlanArgsRestoreConfig {
  all_namespaces?: boolean;
  cluster_resource_conflict_policy?: string;
  namespaced_resource_restore_mode?: string;
  no_namespaces?: boolean;
  volume_data_restore_policy?: string;
  cluster_resource_restore_scope?: GoogleGkeBackupRestorePlanArgsRestoreConfigClusterResourceRestoreScope;
  excluded_namespaces?: GoogleGkeBackupRestorePlanArgsRestoreConfigExcludedNamespaces;
  restore_order?: GoogleGkeBackupRestorePlanArgsRestoreConfigRestoreOrder;
  selected_applications?: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedApplications;
  selected_namespaces?: GoogleGkeBackupRestorePlanArgsRestoreConfigSelectedNamespaces;
  transformation_rules?: GoogleGkeBackupRestorePlanArgsRestoreConfigTransformationRules[];
  volume_data_restore_policy_bindings?: GoogleGkeBackupRestorePlanArgsRestoreConfigVolumeDataRestorePolicyBindings[];
}

export interface GoogleGkeBackupRestorePlanArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleGkeBackupRestorePlanArgs {
  backup_plan: string;
  cluster: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  restore_config: GoogleGkeBackupRestorePlanArgsRestoreConfig;
  timeouts?: GoogleGkeBackupRestorePlanArgsTimeouts;
}

export class google_gke_backup_restore_plan extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleGkeBackupRestorePlanArgs) {
    const meta = {restore_config:{isBlock:true,cluster_resource_restore_scope:{isBlock:true,excluded_group_kinds:{isBlock:true},selected_group_kinds:{isBlock:true}},excluded_namespaces:{isBlock:true},restore_order:{isBlock:true,group_kind_dependencies:{isBlock:true,requiring:{isBlock:true},satisfying:{isBlock:true}}},selected_applications:{isBlock:true,namespaced_names:{isBlock:true}},selected_namespaces:{isBlock:true},transformation_rules:{isBlock:true,field_actions:{isBlock:true},resource_filter:{isBlock:true,group_kinds:{isBlock:true}}},volume_data_restore_policy_bindings:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_gke_backup_restore_plan", resourceName);
  }

  get backup_plan(): string {
    return `${this.resourceType}.${this.resourceName}.backup_plan`;
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_reason(): string {
    return `${this.resourceType}.${this.resourceName}.state_reason`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }
}
